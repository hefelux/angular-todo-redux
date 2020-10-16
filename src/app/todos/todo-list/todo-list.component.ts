import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtersAccepted } from 'src/app/filters/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos: Todo[] = [];
    actualFilter: filtersAccepted;

    constructor( private store: Store<AppState> ) { }

    ngOnInit(): void {

        this.store.subscribe(({ todos, filters }) => {
            this.todos = todos;
            this.actualFilter = filters;
        });

    }

}
