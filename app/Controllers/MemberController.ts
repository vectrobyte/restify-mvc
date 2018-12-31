import {Controller} from "./Controller";

export class MemberController extends Controller {

    public static index(request, response, next) {
        // add conditions here
        return next();
    }

    public static store(request, response, next) {
        return next();
    }

    public static update(request, response, next) {
        return next();
    }

    public static destroy(request, response, next) {
        return next();
    }

    public static show(request, response, next) {
        return next();
    }
}