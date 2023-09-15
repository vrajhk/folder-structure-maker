import { createReducer, on } from '@ngrx/store';
import * as CollectionActions from './collection.actions';
import { data } from '../../../data';
import { CollectionState } from './collection.state';

const initialState: CollectionState = {
  data: [],
};

export const CollectionReducer = createReducer<CollectionState>(
  initialState,
  on(CollectionActions.addToRoot, (state, { item }) => {
    const data = [...state.data];
    data.push(item);
    return { data };
  }),
  on(CollectionActions.removeFromRoot, (state, { index }) => {
    const data = [...state.data];
    data.splice(index, 1);
    return { data };
  })
);
