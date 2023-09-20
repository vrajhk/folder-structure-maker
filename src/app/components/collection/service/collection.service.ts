import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Collection } from 'src/app/models/collection.model';

export interface InputNameErrorType {
  error: null | true;
}

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  duplicateNameError$ = new BehaviorSubject<InputNameErrorType>({
    error: null,
  });
  updatedRootCollection$ = new Subject<Collection[]>();
  errorStatus: null | true = null;

  // sends error as true for reflecting to input component
  sendErrorAsTrue() {
    this.errorStatus = true;
    this.duplicateNameError$.next({ error: this.errorStatus });
  }

  // sends error as null to input component
  sendErrorAsNull() {
    this.errorStatus = null;
    this.duplicateNameError$.next({ error: this.errorStatus });
  }

  // sends updated Collection Data to Layout component on adding a new Root folder
  sendUpdatedRootCollection(rootCollection: Collection[]) {
    this.updatedRootCollection$.next(rootCollection);
  }
}
