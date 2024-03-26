import { crearUserRepo } from "../../../domain/repository/user/crearUserRepo";
import { UserDB } from '../../postgres/models/user'

export class CrearUserSQL implements crearUserRepo{

    constructor() {}

  async crear(user: any): Promise<any> {
    return await UserDB.create(user);
  }
}