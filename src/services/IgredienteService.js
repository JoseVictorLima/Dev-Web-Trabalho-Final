import { HttpService } from "./HttpService";

class IgredienteService extends HttpService {
    constructor() {
        super("igredientes")
    }
}

export const igredientes = new IgredienteService()