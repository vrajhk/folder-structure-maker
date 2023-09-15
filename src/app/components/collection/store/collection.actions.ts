import { createAction, props } from '@ngrx/store';
import { Collection } from 'src/app/models/collection.model';

export const addToRoot = createAction(
  '[Add Root Folder] Add Folder To Root',
  props<{ item: Collection }>()
);

export const removeFromRoot = createAction(
  '[Add Root Folder] Remove Root Folder',
  props<{ index: number }>()
);
