import {Injectable} from "angular2/core";
import {Todo} from "../models/todo";

@Injectable()
export class TodoService{
    todos:Todo[] = [];

    add(todo:Todo) {
        this.todos = [...this.todos, todo];

    }
}