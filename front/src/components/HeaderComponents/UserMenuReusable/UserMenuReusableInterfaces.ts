import { IUserLogin } from "@/interfaces/RequestInterfaces";

export interface IMenuReusableData {}

export interface IMenuReusableStatus {
  menuStatus: boolean;
  handlerLogOut: () => void;
  currentUser: IUserLogin | null;
}

export interface IButtonUserMenu {
  children: React.ReactNode;
  text: string;
  routeNavigate?: string;
  onClick?: () => void;
}
