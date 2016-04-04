import {Pipe} from "angular2/core";

@Pipe({
    name: "status"
})
export class TodoStatusPipe {
    transform(value) {
        console.log(value);
        return value.filter(function(item){
            return item.isDone;
        });
    }
}