import { User } from "../../entities/user";

export interface buscarUsersRepo {
    findAll(): Promise<User[]>;
}