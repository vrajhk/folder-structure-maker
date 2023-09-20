import { BehaviorSubject, Subject } from 'rxjs';
import {
  CollectionService,
  InputNameErrorType,
} from '../components/collection/service/collection.service';
import { Collection } from '../models/collection.model';

export const mockCollectionService: CollectionService = {
  sendErrorAsNull() {},
  sendErrorAsTrue() {},
  sendUpdatedRootCollection() {},
  duplicateNameError$: new BehaviorSubject<InputNameErrorType>({ error: null }),
  updatedRootCollection$: new Subject<Collection[]>(),
};
