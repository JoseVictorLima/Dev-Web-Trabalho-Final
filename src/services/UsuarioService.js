import { HttpService } from "./HttpService";

class UsuarioService extends HttpService {
    constructor() {
        super("usuarios")
    }
}

export const usuarios = new UsuarioService()