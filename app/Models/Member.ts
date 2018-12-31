import {Model} from "./Model";

export class Member extends Model{

    protected table = 'member';
    protected fillable = ['name', 'post', 'salary'];
    protected hidden = ['updated_at'];

}
