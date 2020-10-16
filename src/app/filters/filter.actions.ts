import { createAction, props } from '@ngrx/store';

export type filtersAccepted = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
    '[FILTER] Set Filter',
    props<{ filterType: filtersAccepted }>()
);
