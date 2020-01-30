import { HttpService } from "./HttpService";

class NovoService extends HttpService {
    constructor() {
        super("novos")
    }
}

export const novos = new NovoService()