import { createAction, props } from '@ngrx/store';
import { Collection } from 'src/app/models/collection.model';

export const addToRoot = createAction(
  '[Collection] Add Folder To Root',
  props<{ item: Collection }>()
);

export const addChild = createAction(
  '[Collection] Append Child To Parent',
  props<{ parent: Collection }>()
);
