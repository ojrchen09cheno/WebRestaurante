import { buscarUserNameRepo } from "../../../domain/repository/user/buscarUserNameRepo";
import { UserDB } from '../../postgres/models/user'

export class BuscarUserNameSQL implements buscarUserNameRepo{

    constructor() {}

  async findByUser(user: string): Promise<any> {
    return await UserDB.findOne({ where: {usuario: user}});
  }
}