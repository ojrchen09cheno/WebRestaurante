import { buscarUsersRepo } from "../../../domain/repository/user/buscarUsersRepo";
import { BuscarUsuariosService } from "../../../domain/services/usuario/buscarUsuariosService";
import { User } from "../../../domain/entities/user";
import { ResponseApi } from "../responseApi";

export class BuscarUsersApp implements BuscarUsuariosService {
  constructor(private buscarUsersRepo: buscarUsersRepo) {}

    // funcion solo para administrador
  async verUsuarios(): Promise<ResponseApi> {

    const result = await this.buscarUsersRepo.findAll();
    // Better to use json rather than user entity?
/*     const usuarios: User[] = [];
    for(const user of result){
      const newUser = User.create(user.id, user.nombre, user.user, user.direccion);
      usuarios.push(newUser);
    }  */
    return new ResponseApi(200, true, "Usuarios encontrados", result);
  }
}
