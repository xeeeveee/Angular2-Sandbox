import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'todo-status',
    template: `<select #status (change)="update.emit(status.value)">
    <option value="0">Incomplete</option>
    <option value="1">Complete</option>
    <option value="all">Any</option>
    </select>`
})

export class TodoStatusComponent {
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}