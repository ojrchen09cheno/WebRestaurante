export class User{
  id!: number;
  nombre!: string;
  usuario!: string;
  contrasena!: string;
  direccion!: string;
  role!: number;
  static create(
    id: number, 
    nombre:string, 
    user: string,
    direccion: string,
    role: number
    )
    {
      const newUser = new User();
      newUser.id = id;
      newUser.nombre = nombre;
      newUser.direccion = direccion;
      newUser.usuario = user;
      newUser.role = role;
      return newUser;
    }
}