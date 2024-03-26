export class User{
  id!: number;
  nombre!: string;
  user!: string;
  contrasena!: string;
  direccion!: string;
  role!: number;
  static create(
    id: number, 
    nombre:string, 
    user: string,
    direccion: string
    )
    {
      const newUser = new User();
      newUser.id = id;
      newUser.nombre = nombre;
      newUser.direccion = direccion;
      newUser.user = user;
      return newUser;
    }
}