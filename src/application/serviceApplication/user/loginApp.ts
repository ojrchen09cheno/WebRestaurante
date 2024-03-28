import { buscarUserNameRepo } from "../../../domain/repository/user/buscarUserNameRepo";
import { LoginService } from "../../../domain/services/usuario/loginService";
import bcrypt from 'bcryptjs'
import { config } from '../../../config/config'
import jwt from 'jsonwebtoken'
import { ResponseApi } from "../responseApi";

export class LoginApp implements LoginService {

  constructor(private buscarUserNameRepo: buscarUserNameRepo){};

  async login(user: any): Promise<any> {

    if(!await this.buscarUserNameRepo.findByUser(user.usuario)){
      delete user.contrasena;
      return new ResponseApi(200, false, "Usuario o contraseña incorrectos", user);
    }

    const userDB = await this.buscarUserNameRepo.findByUser(user.usuario);
    if(!bcrypt.compareSync(user.contrasena, userDB.contrasena)){
      delete user.contrasena;
      return new ResponseApi(200, false, "Usuario o contraseña incorrectos", user);
    }

    let token = jwt.sign(
      {
      user: userDB.usuario,
      id: userDB.id
      },
      config.SECRET!, 
      {
      expiresIn: config.TOKEN_EXPIRE
    });

    delete user.contrasena;
    user.token = token;
    return new ResponseApi(200, true, "Login correcto", user);
    }
  
}