import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TournamentEntity } from 'src/tournament/entities/tournament.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { FileRepository } from './file.repository';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(TournamentEntity)
    private tournamentRepostory: Repository<TournamentEntity>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private fileRepository: FileRepository,
  ) {}

  async uploadImageToCloudinary(file: Express.Multer.File): Promise<string> {
    const uploadedImage = await this.fileRepository.uploadImage(file);
    return uploadedImage.secure_url;
  }

  async UpdateTournamentFlyer(id: string, file: Express.Multer.File) {
    const tournament = await this.tournamentRepostory.findOne({
      where: { id },
    });
    if (!tournament) {
      throw new NotFoundException('No fue posible encontrar el torneo');
    } else {
      const tournamentFlyer = await this.uploadImageToCloudinary(file);
      await this.tournamentRepostory.update(id, { tournamentFlyer });
      return { message: 'Imagen actualizada con exito con exito' };
    }
  }

  async uploadTournamentMultimedia(id: string, file: Express.Multer.File) {
    const tournament = await this.tournamentRepostory.findOne({
      where: { id },
    });
    if (!tournament) {
      throw new NotFoundException('No fue posible encontrar el torneo');
    } else {
      const tournamentNewImg = await this.uploadImageToCloudinary(file)
      const imgArray = tournament.gallery
      const arrayUpdated = {tournamentNewImg, ...imgArray}
      const tournamentUpdated:TournamentEntity = {
        gallery: arrayUpdated,
        ...tournament
      }
      await this.tournamentRepostory.save(tournamentUpdated);
      return { message: 'Imagen subida con exito con exito' };
    }
  }

  async updateUserProfileImage(id:string, file: Express.Multer.File) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('No fue posible encontrar al usuario');
    } else {
      const profilePhoto = await this.uploadImageToCloudinary(file)
      await this.userRepository.update(id, { profileImg: profilePhoto });
      return profilePhoto;
    }
  }
}
