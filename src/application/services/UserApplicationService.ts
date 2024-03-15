import { UserRepository } from "../../domain/repository/userRepository";
import { UserService } from "../serviceInterface/userService";
import bcrypt from 'bcryptjs'
import { config } from '../../config/config'
import jwt from 'jsonwebtoken'

export class UserApplicationService implements UserService {

  constructor(private userRepo: UserRepository){};
  
  async registrarse(user: any): Promise<any> {
    // TODO check if user is unique
    const encriptar = bcrypt.hashSync(user.contrasena, 10);
    user.contrasena = encriptar;
    const result = await this.userRepo.crear(user);
    return result;
  }
  async login(user: any): Promise<any> {
    // crear jwt
    if(!await this.userRepo.findByUser(user.usuario)){
      throw new Error("Usuario o contrasena incorrectos")
    }

    const userDB = await this.userRepo.findByUser(user.usuario);
    console.log(user);
    console.log(userDB);
    if(!bcrypt.compareSync(user.contrasena, userDB.contrasena)){
      throw new Error("Usuario o contrasena incorrectos")
    }

    let token = jwt.sign({
      user: userDB.user,},
      config.SECRET!, {
      expiresIn: config.TOKEN_EXPIRE
      })
      
      return token;
    }

  async verUsuarios(): Promise<any> {
    // funcion solo para administrador
    throw new Error("Method not implemented.");
  }
  
}