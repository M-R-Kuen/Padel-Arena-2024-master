//? User Interfaces

import { ICategories } from "./ComponentsInterfaces/TournamentCategorias";

export interface IUserLoginReq {
  email: string;
  password: string;
}

export interface IUserRegisterReq {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  country: string;
  city: string;
  phone: string;
  address: string;
  category: string;
}

export interface IUserGooglePut {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  profileImg: string;
  category: { name: string; id: string; description: string };
  role?: "admin" | "jugador";
  token: string;
}

export interface IUserLoginRes {
  message: string;
  token: string;
  userClean: IUserLogin;
}

export interface IUserLogin {
  //RESPUESTA DEL BACK DEL POST NEXT AUTH  SAVE CURRENT USER
  id: string;
  name: string;
  lastName?: string;
  email: string;
  password?: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  profileImg: string;
  role?: "admin" | "jugador";
  category: { name: string; id: string; description: string };
  token: string;
}

//? Tournament Interfaces

enum TeamsQuantity {
  Diesiseis = 16,
  Treintaidos = 32,
  Secentaidos = 64,
}

export interface ICreateTournamentReq {
  name: string;
  startDate: Date;
  startTime: string;
  endTime: string;
  playingDays: string[];
  teamsQuantity: TeamsQuantity;
  matchDuration: number;
  courts: number;
  description: string;
  tournamentFlyer: string;
  category: string;
  price: number;
  plusCode?: string;
}

export interface location {
  lat: string;
  lng: string;
}

export interface ICreateTournamentFormData {
  name: string;
  startDate: Date;
  startTime: string;
  endTime: string;
  Lunes?: ["on"] | [] | undefined;
  Martes?: ["on"] | [] | undefined;
  Miércoles?: ["on"] | [] | undefined;
  Jueves?: ["on"] | [] | undefined;
  Viernes?: ["on"] | [] | undefined;
  Sábado?: ["on"] | [] | undefined;
  Domingo?: ["on"] | [] | undefined;
  teamsQuantity: TeamsQuantity;
  matchDuration: number;
  courts: number;
  description: string;
  tournamentFlyer: string;
  category: string;
  price: number;
  location: string;
}

//? Category Interfaces

export interface ICategoryRes {
  id: string;
  name: string;
  description: string;
}

export interface IUserGoogle {
  name: string;
  email: string;
  image: string;
}

//? Payment Interfaces

export interface IProductPaymentDataReq {
  tournament: string;
  host: string;
  user: string;
}

export interface IPayment {
  orderId: string;
  status: string;
  amount: number;
  date: string;
}

export interface IAallUserPayments {
  message: {
    user: {
      id: string;
      name: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      city: string;
      address: string;
      profileImg: string;
      role: string;
      clientId?: null | string;
    };
    id: string;
    payment_id: string;
    status: string;
    date_created: string;
    date_approved: string;
    date_last_updated: string;
    transaction_amount: number;
    successInscription?: boolean;
    tournament: {
      id: string;
      name: string;
      startDate: string;
      endDate: string;
      startingTime: string;
      finishTime: string;
      playingDay: string[];
      status: string;
      inscription: string;
      teamsQuantity: number;
      matchDuration: number;
      description: string;
      matchStartTime: string;
      matchEndTime: string;
      gallery?: string[] | null;
      tournamentFlyer: string;
      courtsAvailable: number;
      price: number;
      plusCode: string;
      team: [] | ITeamToTournement[];
    };
  };
}

// MP - DashboardAdmin

export interface IAallPayments {
  id: string;
  payment_id: string;
  status: string;
  date_created: string;
  date_approved: string;
  date_last_updated: string;
  transaction_amount: number;
  successInscription: boolean;
  user: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    profileImg: string;
    clientId: string | null;
    role: string;
  };
}

//? Teams Interfaces

export interface IPostNewTeam {
  name: string;
  players: string[];
}

export interface ITeamToTournement {
  id: string;
  name: string;
  order: number;
  ableForPlay: boolean;
}
