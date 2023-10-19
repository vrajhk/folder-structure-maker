import { Component, Input } from '@angular/core';
import {
  Collection,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { CollectionService } from './service/collection.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  @Input() collectionData: Collection[] = [];
  @Input() parent!: Collection;
  folderType = CollectionTypeEnum.folder;
  fileType = CollectionTypeEnum.file;

  constructor(
    private collectionService: CollectionService,
    private apiService: ApiService
  ) {}

  // after user submits the form input(separate component), check if the respective Folder/File name exist in its row, if yes then notify input of the same and return; else set the added item's property and parent's property required on child addition
  onUserSubmittedForm(name: string, parent: Collection, item: Collection) {
    item.showOptions = false;
    this.apiService
      .addFolderOrFile({
        value: name,
        type: item.type,
        parent: parent._id,
      })
      .subscribe((data) =>
        this.collectionService.sendUpdatedRootCollection(data)
      );
    parent.canAddChild = true; // reset canAddChild of it's parent to let parent add another item
  }

  // after user cancels the form input(separate component), discard the pushed dummy child from parent and reset isChild for letting user select File/Folder
  onFormCancelled(parent: Collection | null) {
    parent?.children?.pop();
    parent && (parent.canAddChild = true);
  }

  // if one dummy child is already added, then no need to add another just return; else; add
  onAddChild(item: Collection): void {
    if (item.hasOwnProperty('canAddChild') && !item.canAddChild) {
      return;
    }
    // else; push dummy child for showing file-folder select option and later apply necessary changes through "onUserSubmittedForm()"
    item.children?.push({
      value: '',
      children: [],
      showOptions: true,
      canAddChild: true,
    });
    item.canAddChild = false;
  }

  // removes particular item from parent's children array
  onRemove(_id: string | undefined): void {
    if (_id)
      this.apiService
        .deleteFolderOrFile(_id)
        .subscribe((data) =>
          this.collectionService.sendUpdatedRootCollection(data)
        );
  }
}
