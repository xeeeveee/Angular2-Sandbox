import {Component} from 'angular2/core';
import {Toolbar} from '../toolbar/toolbar.component'
import {TodoListComponent} from '../todo-list/todo-list.component'
import {TodoStatusComponent} from "../todo-status/todo-status.component";

@Component({
    selector: 'app',
    template: '<toolbar></toolbar><div class="container"><todo-status (update)="status = $event"></todo-status><todo-list [status]="status"></todo-list></div>',
    directives: [TodoListComponent, TodoStatusComponent, Toolbar]
})

export class AppComponent {

}
