import { Component, EventEmitter, Output } from '@angular/core';
import {
  Collection,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { ApiService } from '../collection/service/api.service';

@Component({
  selector: 'app-add-root-folder',
  templateUrl: './add-root-folder.component.html',
  styleUrls: ['./add-root-folder.component.scss'],
})
export class AddRootFolderComponent {
  constructor(private apiService: ApiService) {}

  folderType = CollectionTypeEnum.folder;
  isAdd = false; // to show/hide file-folder input
  rootCollection: Collection[] = [];
  @Output() foldersDataEvent = new EventEmitter<Collection[]>();

  // checks if file name already exists and sends error to input component; else adds new empty folder to the data array
  onUserSubmittedForm(inputFolderName: string): void {
    this.apiService
      .addFolderToRoot({ value: inputFolderName })
      .subscribe((data) => {
        this.foldersDataEvent.emit(data);
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
