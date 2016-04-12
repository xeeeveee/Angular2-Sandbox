import {Component, Input} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoInputComponent} from '../todo-input/todo-input.component';
import {TodoStatusPipe} from "../../pipes/todo-status";
import {TodoService} from "../../services/todo-service";

@Component({
    selector: 'todo-list',
    templateUrl: 'app/components/todo-list/todo-list.html', // TODO: Explore reletive paths - Appears to be some issues with it: https://github.com/angular/angular/issues/2383
    styleUrls: ['app/components/todo-list/todo-list.css'], // TODO: Explore reletive paths - Appears to be some issues with it: https://github.com/angular/angular/issues/2383
    directives: [TodoInputComponent],
    pipes: [TodoStatusPipe]
})

export class TodoListComponent {

    @Input() status:boolean;

    todoService:TodoService;

    constructor(public todoService:TodoService) {
        let first = {text: 'My first todo', isDone: false};
        this.todoService.add(first)
    }

    addTodo(todo:Todo) {
        this.todoService.add(todo);
    }

    toggleTodo(todo:Todo) {
        if (todo.isDone) {
            todo.isDone = false;
        } else {
            todo.isDone = true;
        }
    }

    get remaining():number {
        return this.todoService.todos.reduce((count, todo:Todo) => count + !todo.isDone, 0)
    }

    get total():number {
        return this.todoService.todos.length;
    }
}