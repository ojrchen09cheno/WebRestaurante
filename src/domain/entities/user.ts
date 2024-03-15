export class User{
  id!: number;
  nombre!: string;
  usuario!: string;
  contrasena!: string;
  direccion!: string;
  role!: number;
  static create(nombre:string){
      const user = new User();
      user.nombre = nombre;
      return user;
  }
}