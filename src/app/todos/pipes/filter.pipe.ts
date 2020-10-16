import { Pipe, PipeTransform } from '@angular/core';
import { filtersAccepted } from 'src/app/filters/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
    name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

    transform(todos: Todo[], filter: filtersAccepted): Todo[] {

        switch (filter) {

            case 'completados':
                return todos.filter(todo => todo.complete);
            case 'pendientes':
                return todos.filter(todo => !todo.complete);
            default:
                return todos;

        }

    }

}
