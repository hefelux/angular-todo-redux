import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtersAccepted } from './filters/filter.actions';
import { filterReducer } from './filters/filter.reducer';

export interface AppState {
    todos: Todo[];
    filters: filtersAccepted;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filters: filterReducer
};
