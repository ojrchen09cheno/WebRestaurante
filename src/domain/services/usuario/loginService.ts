import { User } from "../../entities/user";

export interface LoginService {
  login(user:User): Promise<User>;
}