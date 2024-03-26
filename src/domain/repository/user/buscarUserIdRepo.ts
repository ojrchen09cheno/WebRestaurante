import { User } from "../../entities/user";

export interface buscarUserIdRepo {
    findById(id: number): Promise<User>;
}