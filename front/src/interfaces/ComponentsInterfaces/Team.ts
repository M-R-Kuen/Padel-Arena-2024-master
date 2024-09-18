import { IUserLogin, IUserRegisterReq } from "../RequestInterfaces";
import { IMatch } from "./Match";
import { ITournament } from "./Tournament";
import { ICategories } from "./TournamentCategorias";

export interface ITeam {
  id: string;
  name: string;
  order: number;
  category?: ICategories;
  user?: Partial<IUserLogin>[];
  tournament?: ITournament;
  ableForPlay: boolean;
}
