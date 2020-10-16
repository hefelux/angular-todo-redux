import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, edit, eliminate, toggle, toggleAll, deleteCompleted } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo')
];

const _todoReducer = createReducer(
    initialState,
    on(create, (state, { texto }) => [...state, new Todo(texto)]),
    // Usamos destructuración para no mutar la data. No hacer push directamente al arreglo con el nuevo todo.
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id){

                return {
                    ...todo,
                    complete: !todo.complete
                };

            } else {
                return todo;
            }

        });
    }),
    on(edit, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id){

                return {
                    ...todo,
                    text
                };

            } else {
                return todo;
            }

        });
    }),
    on(eliminate, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, { complete }) => {
        return state.map(todo => {

            return {
                ...todo,
                complete
            };

        });
    }),
    on(deleteCompleted, (state) => state.filter(todo => !todo.complete)),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
