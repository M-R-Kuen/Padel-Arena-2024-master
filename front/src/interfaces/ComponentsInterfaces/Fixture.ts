import { IMatch } from "./Match";
import { IStages } from "./Round";

import { ITournament } from "./Tournament";

export interface IFixture {
  id: string;
  round: IStages[];
}
