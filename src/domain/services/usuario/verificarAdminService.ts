export interface VerificarAdminService{
  Verificar(role:number):Promise<boolean>;
}