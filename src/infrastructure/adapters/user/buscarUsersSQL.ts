import { buscarUsersRepo } from "../../../domain/repository/user/buscarUsersRepo";
import { UserDB } from '../../postgres/models/user'

export class BuscarUsersSQL implements buscarUsersRepo{

    constructor() {}
  async findAll(): Promise<any> {
    return await UserDB.findAll();
  }
}