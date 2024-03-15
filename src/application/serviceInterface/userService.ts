export interface UserService {
  registrarse(user: any): Promise<any>;
  login(user:any): Promise<any>;
  verUsuarios(): Promise<any>;
}