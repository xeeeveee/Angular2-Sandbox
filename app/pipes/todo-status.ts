import {Pipe} from "angular2/core";

@Pipe({
    name: "status"
})
export class TodoStatusPipe {
    transform(value, [status]) {
        console.log(status);
        return value.filter(function(item){
            if(status == 'all') {
                return true;
            }

            return (item.isDone == status);
        });
    }
}