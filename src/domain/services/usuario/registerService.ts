import { User } from "../../entities/user";

export interface RegisterService {
  registrarse(nuevoUser: any): Promise<any>;
}