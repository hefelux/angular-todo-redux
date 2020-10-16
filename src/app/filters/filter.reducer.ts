import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState: actions.filtersAccepted = 'todos';

const _filterReducer = createReducer(
    initialState,
    on(actions.setFilter,(state, { filterType }) => filterType),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}
