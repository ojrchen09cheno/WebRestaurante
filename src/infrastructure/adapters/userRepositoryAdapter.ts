import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/repository/userRepository'
import { UserDB } from '../postgres/models/user'

export class UserRepositoryAdapter implements UserRepository{

    constructor() {}
  async findById(id: number): Promise<any> {
    return await UserDB.findByPk(id);
  }
  async findAll(): Promise<any> {
    return await UserDB.findAll();
  }
  async crear(user: any): Promise<any> {
    return await UserDB.create(user);
  }
  async findByUser(user: string): Promise<any> {
    return await UserDB.findOne({ where: {usuario: user}});
  }
}