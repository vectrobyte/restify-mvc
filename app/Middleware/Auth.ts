import {Closure} from "../../config/Closure";

export class Auth{
    public static handle(request: object, next: Closure) {
        return next; // next(request);
    }
}