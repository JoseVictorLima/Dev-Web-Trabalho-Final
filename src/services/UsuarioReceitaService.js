import { HttpService } from "./HttpService";

class UsuarioReceitaService extends HttpService {
    constructor() {
        super("usuario-receita")
    }
}

export const usuarioReceitas = new UsuarioReceitaService()