import { buscarUserIdRepo } from "../../../domain/repository/user/buscarUserIdRepo";
import { UserDB } from '../../postgres/models/user'

export class BuscarUserIdSQL implements buscarUserIdRepo{

    constructor() {}
  async findById(id: number): Promise<any> {
    return await UserDB.findByPk(id);
  }
}