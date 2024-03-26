import { crearUserRepo } from "../../../domain/repository/user/crearUserRepo";
import { buscarUserNameRepo } from "../../../domain/repository/user/buscarUserNameRepo";
import { RegisterService } from "../../../domain/services/usuario/registerService";
import bcrypt from 'bcryptjs';
import { ResponseApi } from "../responseApi";

export class RegisterApp implements RegisterService {

  constructor(private crearUserRepo: crearUserRepo, private buscarUserNameRepo: buscarUserNameRepo){};
  
  async registrarse(user: any): Promise<ResponseApi> {
    // More secure if use email aswell and send error to email
    if(await this.buscarUserNameRepo.findByUser(user.user)){
      delete user.contrasena;
      return new ResponseApi(200, false, "El usuario ya existe", user);
    }
    const encriptar = bcrypt.hashSync(user.contrasena, 10);
    user.contrasena = encriptar;
    const result = await this.crearUserRepo.crear(user);
    return new ResponseApi(201, true, "Registro exitoso", user);
  }
  
}