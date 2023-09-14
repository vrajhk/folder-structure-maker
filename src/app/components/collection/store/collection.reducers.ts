import { createReducer, on } from '@ngrx/store';
import * as collectionActions from './collection.actions';
import { data } from '../../../data';
import { collectionState } from './collection.state';

const initialState: collectionState = {
  data: data,
};

export const CollectionReducer = createReducer<collectionState>(
  initialState,
  on(collectionActions.addToRoot, (state, { item }) => {
    const data = [...state.data];
    data.push(item);
    return { data };
  })
  // on(collectionActions.addChild, (state, {parent})=>{
  //   parent.children?.push({
  //     type: 'Folder',
  //     name: '',
  //     children: [],
  //     showOptions: true,
  //     selectionType: null,
  //     canAddChild: true,
  //   });
  // })
);
