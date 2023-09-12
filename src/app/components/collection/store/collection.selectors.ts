import { createFeatureSelector, createSelector } from '@ngrx/store';
import { collectionState } from './collection.state';

const getCollectionState = createFeatureSelector<collectionState>('collection');
export const CollectionSelector = createSelector(
  getCollectionState,
  (state) => state.data
);
