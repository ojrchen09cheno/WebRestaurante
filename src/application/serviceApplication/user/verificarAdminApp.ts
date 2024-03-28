import { buscarUserIdRepo } from "../../../domain/repository/user/buscarUserIdRepo";
import { VerificarAdminService } from "../../../domain/services/usuario/verificarAdminService";

export class VerificarAdminApp implements VerificarAdminService{

  constructor(private buscarUserIdRepo: buscarUserIdRepo){};

  async Verificar(id: number): Promise<boolean> {
    const usuario = await this.buscarUserIdRepo.findById(id);
    const role = usuario.role;
    if(role == 2){
      return true;
    }
    else{
      return false;
    }
  }

}