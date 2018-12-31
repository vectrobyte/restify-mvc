import {Middleware} from "../app/Middleware/Middleware";

export class Route {

    private static path: string;

    public static prefix(path: string) {
        this.path += '/' + path;
        return this;
    }

    public static group(middleware: Middleware[], method) {
        // run each middleware assigned if all of them passes, forward the request
        return method();
    }

    public static middleware() {
        return this;
    }

    public static get(path: string, method) {
        this.path += '/' + path;
        return method();
    }

    public static post(path: string, method) {
        this.path += '/' + path;
        return method();
    }

    public static put(path: string, method) {
        this.path += '/' + path;
        return method();
    }

    public static patch(path: string, method) {
        this.path += '/' + path;
        return method();
    }

    public static delete(path: string, method) {
        this.path += '/' + path;
        return method();
    }
}