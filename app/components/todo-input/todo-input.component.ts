import {Component} from 'angular2/core';
import {Output, EventEmitter} from  'angular2/core';
import {Todo} from '../../models/todo';

@Component({
    selector: 'todo-input',
    template: '<input [(ngModel)]="text"  (keyup.enter)="addTodo()" placeholder="New Todo">'
})

export class TodoInputComponent {
    @Output() newTodo = new EventEmitter<Todo>();

    text:string;

    addTodo() {
        this.newTodo.emit({'text': this.text, 'isDone': false});
        this.text = '';
    }
}
