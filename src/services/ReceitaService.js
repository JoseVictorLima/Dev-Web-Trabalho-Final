import { HttpService } from "./HttpService";

class ReceitaService extends HttpService {
    constructor() {
        super("receitas")
    }
}

export const receitas = new ReceitaService()