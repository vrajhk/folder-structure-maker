import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Collection } from 'src/app/models/collection.model';

export interface InputNameErrorType {
  error: null | true;
}

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  updatedRootCollection$ = new Subject<Collection[]>();

  // sends updated Collection Data to Layout component on adding a new Root folder
  sendUpdatedRootCollection(rootCollection: Collection[]) {
    this.updatedRootCollection$.next(rootCollection);
  }
}
