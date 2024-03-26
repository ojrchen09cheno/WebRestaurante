import { User } from "../../entities/user";

export interface crearUserRepo {
    crear(user: User): Promise<User>;
}