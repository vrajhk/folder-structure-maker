import { BehaviorSubject, Subject } from 'rxjs';
import {
  CollectionService,
  InputNameErrorType,
} from '../components/collection/service/collection.service';
import { Collection } from '../models/collection.model';

export const mockCollectionService: CollectionService = {
  sendUpdatedRootCollection() {},
  updatedRootCollection$: new Subject<Collection[]>(),
};
