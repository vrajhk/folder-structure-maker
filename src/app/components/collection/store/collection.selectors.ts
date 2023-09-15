import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CollectionState } from './collection.state';

const getCollectionState = createFeatureSelector<CollectionState>('collection');
export const CollectionSelector = createSelector(
  getCollectionState,
  (state) => state.data
);
