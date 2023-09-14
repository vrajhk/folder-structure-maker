import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface NameErrorType {
  error: null | true;
}

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  sendDuplicateNameError = new BehaviorSubject<NameErrorType>({ error: null });

  sendErrorAsTrue() {
    this.sendDuplicateNameError.next({ error: true });
  }

  sendErrorAsNull() {
    this.sendDuplicateNameError.next({ error: null });
  }
}
