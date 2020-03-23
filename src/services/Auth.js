import { HttpService } from "./HttpService";

class NovoService extends HttpService {
    constructor() {
        super("auth")
    }
}

export const auth = new NovoService()