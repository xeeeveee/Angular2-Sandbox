import {Component} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoInputComponent} from '../todo-input/todo-input.component';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/components/todo-list/todo-list.html', // TODO: Explore reletive paths - Appears to be some issues with it: https://github.com/angular/angular/issues/2383
    styleUrls: ['app/components/todo-list/todo-list.css'], // TODO: Explore reletive paths - Appears to be some issues with it: https://github.com/angular/angular/issues/2383
    directives: [TodoInputComponent]
})

export class TodoListComponent {

    todos:Todo[];

    constructor() {
        this.todos = [];
        let first = {text: 'My first todo', isDone: false};
        this.todos.push(first);
    }

    addTodo(todo:Todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    toggleTodo(todo:Todo) {
        if (todo.isDone) {
            todo.isDone = false;
        } else {
            todo.isDone = true;
        }
    }

    get remaining():number {
        return this.todos.reduce((count, todo:Todo) => count + !todo.isDone, 0)
    }
}