import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CollectionActions from '../collection/store/collection.actions';
import {
  Collection,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { CollectionSelector } from '../collection/store/collection.selectors';
import { CollectionService } from '../collection/service/collection.service';

@Component({
  selector: 'app-add-root-folder',
  templateUrl: './add-root-folder.component.html',
  styleUrls: ['./add-root-folder.component.scss'],
})
export class AddRootFolderComponent {
  constructor(
    private store: Store,
    private collectionService: CollectionService
  ) {}
  ngOnInit() {
    console.log('onInit');
    this.store
      .select(CollectionSelector)
      .subscribe((collectionData) => (this.rootCollection = collectionData));
  }
  folderType = CollectionTypeEnum.folder;
  isAdd = false; // to show/hide file-folder input
  rootCollection!: Collection[];

  // checks if file name already exists and sends error to input component; else adds new empty folder to the data array
  onUserSubmittedForm(inputFolderName: string): void {
    if (this.rootCollection.find((data) => data.name === inputFolderName)) {
      this.collectionService.sendErrorAsTrue();
      return;
    }
    this.collectionService.sendErrorAsNull();
    this.store.dispatch(
      CollectionActions.addToRoot({
        item: {
          type: CollectionTypeEnum.folder,
          name: inputFolderName,
          children: [],
          canAddChild: true,
          showOptions: false,
          selectionType: null,
          minimizeChildren: false,
          folderCount: 0,
          fileCount: 0,
        },
      })
    );
    this.isAdd = false;
  }

  // hides form input on user cancelled the form
  onFormCancelled(event: { isShowInput: boolean }): void {
    this.collectionService.sendErrorAsNull();
    this.isAdd = event.isShowInput;
  }

  // triggers input by setting isAdd to true
  add(): void {
    this.isAdd = true;
  }
}
