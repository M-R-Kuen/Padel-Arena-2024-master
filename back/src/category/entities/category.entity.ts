import { Team } from "src/team/entities/team.entity";
import { TournamentEntity } from "src/tournament/entities/tournament.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity({
    name: "CATEGORY"
})
export class Category {
    @PrimaryGeneratedColumn("uuid")
        id:string = uuid()

    @Column({type: "varchar", length: 50, nullable:false})
        name:string
    
    @Column({type: "text", nullable:false})
        description:string

    @OneToMany(() => Team, (team) => team.category, {nullable:true})
        team: Team[]

    @OneToMany(() => TournamentEntity, (tournaments)=> tournaments.category, {nullable:true} )
        tournaments: TournamentEntity

    @OneToMany(()=> User, (user)=> user.category, {nullable:true})
        users: User[]
}
