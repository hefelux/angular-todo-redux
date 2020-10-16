import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtersAccepted, setFilter } from 'src/app/filters/filter.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    totalPendings = 0;
    actualFilter: filtersAccepted = 'todos';
    filters: filtersAccepted[] = ['todos', 'completados', 'pendientes'];

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        // Accedemos a todo el state ya que necesitamos consultar todos y filtros
        this.store.subscribe( state => {
            this.actualFilter = state.filters;
            this.totalPendings = state.todos.filter( todo => !todo.complete ).length;
        });
    }

    setFilter(filter: filtersAccepted): void {
        this.actualFilter = filter;
        this.store.dispatch(setFilter({ filterType: this.actualFilter }));
    }

    deleteCompleted(): void {
        this.store.dispatch(deleteCompleted());
    }

}
