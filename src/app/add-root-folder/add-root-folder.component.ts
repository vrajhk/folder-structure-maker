import { Component } from '@angular/core';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-add-root-folder',
  templateUrl: './add-root-folder.component.html',
  styleUrls: ['./add-root-folder.component.scss'],
})
export class AddRootFolderComponent {
  constructor(private collectionService: CollectionService) {}
  isAdd = false; // to show/hide file-folder input

  // adds new empty folder to the data array
  onUserSubmittedForm(inputFolderFileValue: string): void {
    console.log('onUserSubmit');
    this.collectionService.collectionData.push({
      type: 'Folder',
      name: inputFolderFileValue,
      children: [],
      canAddChild: true,
      showOptions: false,
      selectionType: null,
    });
    this.isAdd = false;
  }

  // hides form input on user cancelled the form
  onFormCancelled(event: { isShowInput: boolean }): void {
    this.isAdd = event.isShowInput;
  }

  // triggers input by setting isAdd to true
  add(): void {
    this.isAdd = true;
  }
}
