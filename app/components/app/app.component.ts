import {Component} from 'angular2/core';
import {TodoListComponent} from '../todo-list/todo-list.component'

@Component({
    selector: 'app',
    template: '<h1>Todo</h1><todo-list></todo-list>',
    directives: [TodoListComponent]
})

export class AppComponent {

}
