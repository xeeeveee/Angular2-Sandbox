import {Component} from 'angular2/core';
import {Toolbar} from '../toolbar/toolbar.component'
import {TodoListComponent} from '../todo-list/todo-list.component'

@Component({
    selector: 'app',
    template: '<toolbar></toolbar><div class="container"><todo-list></todo-list></div>',
    directives: [TodoListComponent, Toolbar]
})

export class AppComponent {

}
