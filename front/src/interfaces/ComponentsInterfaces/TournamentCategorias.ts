import { IUserRegisterReq } from "../RequestInterfaces";
import { ITeam } from "./Team";
import { ITournament } from "./Tournament";

export interface ICategories {
  id: string;
  name: string;
  description: string;
  teams?: ITeam[];
  tournaments?: ITournament[];
  users?: IUserRegisterReq[];
}
