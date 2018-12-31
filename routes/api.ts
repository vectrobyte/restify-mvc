import {Route} from "../config/Route";
import {MemberController} from "../app/Controllers/MemberController";

Route.prefix('member').group([], () => {
    Route.post('create', MemberController.store());
    Route.get(':id', MemberController.show());
    Route.get('all', MemberController.index());
    Route.patch(':id', MemberController.update());
    Route.delete(':id', MemberController.destroy());
});