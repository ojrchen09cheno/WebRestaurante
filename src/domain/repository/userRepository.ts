import { User } from "../entities/user";

export interface UserRepository {
    findById(id: number): Promise<any>;
    findAll(): Promise<any>;
    crear(user: User): Promise<any>;
    findByUser(user: string): Promise<any>;
}