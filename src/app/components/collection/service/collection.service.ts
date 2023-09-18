import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Collection } from 'src/app/models/collection.model';

interface NameErrorType {
  error: null | true;
}

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  sendDuplicateNameError = new BehaviorSubject<NameErrorType>({ error: null });
  updatedRootCollection$ = new Subject<Collection[]>();

  // sends error as true for reflecting to input component
  sendErrorAsTrue() {
    this.sendDuplicateNameError.next({ error: true });
  }

  // sends error as null to input component
  sendErrorAsNull() {
    this.sendDuplicateNameError.next({ error: null });
  }

  // sends updated Collection Data to Layout component on adding a new Root folder
  sendUpdatedRootCollection(rootCollection: Collection[]) {
    this.updatedRootCollection$.next(rootCollection);
  }
}
