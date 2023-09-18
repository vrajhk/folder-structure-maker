import { Component, Input } from '@angular/core';
import {
  Collection,
  CollectionType,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { CollectionService } from './service/collection.service';

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

  constructor(private collectionService: CollectionService) {}

  // sets item's select type and trigger it on UI
  triggerInput(item: Collection, type: CollectionType) {
    item.selectionType = type;
  }

  // triggers file-folder option selection again
  takeBackAfterSelection(item: Collection) {
    item.selectionType = null;
  }

  // after user submits the form input(separate component), check if the respective Folder/File name exist in its row, if yes then notify input of the same and return; else set the added item's property and parent's property required on child addition
  onUserSubmittedForm(name: string, parent: Collection, item: Collection) {
    if (
      parent?.children?.find(
        (el) => el.name === name && el.type === item.selectionType
      )
    ) {
      // notifies input component
      this.collectionService.sendErrorAsTrue();
      return;
    }
    // notifies input component
    this.collectionService.sendErrorAsNull();
    item.showOptions = false;
    item.name = name;
    item.selectionType && (item.type = item.selectionType);
    if (item.type === CollectionTypeEnum.folder) {
      item.minimizeChildren = false;
      parent.folderCount !== undefined && parent.folderCount++;
    } else {
      parent.fileCount !== undefined && parent.fileCount++;
    }
    parent.canAddChild = true; // reset canAddChild of it's parent to let parent add another item
  }

  // after user cancels the form input(separate component), discard the pushed dummy child from parent and reset isChild for letting user select File/Folder
  onFormCancelled(parent: Collection | null) {
    this.collectionService.sendErrorAsNull();
    parent?.children?.pop();
    parent && (parent.canAddChild = true);
  }

  // if one dummy child is already added, then no need to add another just return; else; add
  onAddChild(item: Collection): void {
    if (!item.canAddChild) {
      return;
    }
    item.minimizeChildren = false;
    // else; push dummy child for showing file-folder select option and later apply necessary changes through "onUserSubmittedForm()"
    item.children?.push({
      type: CollectionTypeEnum.folder,
      name: '',
      children: [],
      showOptions: true,
      selectionType: null,
      canAddChild: true,
      fileCount: 0,
      folderCount: 0,
    });
    item.canAddChild = false;
  }

  // removes particular item from parent's children array
  onRemove(index: number, type: CollectionType): void {
    // if element to be removed is "root" folder, then remove it from whole data i.e. collectionData, else; from its "parent"
    if (!this.parent) {
      this.collectionData.splice(index, 1);
    } else {
      this.parent?.children?.splice(index, 1);
      if (type === CollectionTypeEnum.folder) {
        this.parent.folderCount !== undefined && this.parent.folderCount--;
      } else {
        this.parent.fileCount !== undefined && this.parent.fileCount--;
      }
    }
  }

  // show/hide Children Collection
  minimizeChildren(item: Collection): void {
    item.minimizeChildren = !item.minimizeChildren;
  }
}
