import { User } from "../../entities/user";

export interface buscarUserNameRepo {
    findByUser(user: string): Promise<User>;
}