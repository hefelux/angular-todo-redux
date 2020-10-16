import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Crea todo',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{id: number}>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{id: number, text: string}>()
);

export const eliminate = createAction(
    '[TODO] eliminate todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] Toggle all todos',
    props<{complete: boolean}>()
);

export const deleteCompleted = createAction(
    '[TODO] Delete complete todos'
);
