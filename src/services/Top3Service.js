import { HttpService } from "./HttpService";

class Top3Service extends HttpService {
    constructor() {
        super("top3")
    }
}

export const top3 = new Top3Service()