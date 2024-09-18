import { IMatch } from "./Match";

export interface IStages {
  id: string;
  stage: string;
  matches: IMatch[];
}
