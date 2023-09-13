import { Component, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Collection, collectionType } from 'src/app/models/collection.model';
import * as CollectionActions from '../collection/store/collection.actions';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  @Input() collectionData: Collection[] = [];
  @Input() parent: Collection | null = null; // parent===null represents "root" folder

  constructor(private store: Store) {}

  // sets item's select type and trigger it on UI
  triggerInput(item: Collection, type: collectionType) {
    item.selectionType = type;
  }

  // triggers file-folder option selection again
  takeBackAfterSelection(item: Collection) {
    item.selectionType = null;
  }

  // after user submits the form input(separate component), set the added item's property
  onUserSubmittedForm(
    name: string,
    parent: Collection | null,
    item: Collection
  ) {
    item.showOptions = false;
    item.name = name;
    item.selectionType && (item.type = item.selectionType);
    if (item.type === 'Folder') {
      (item.minimizeChildren = false),
        (item.folderCount = 0),
        (item.fileCount = 0);
    }
    if (parent) {
      parent.canAddChild = true; // reset canAddChild of it's parent to let parent add another item
      if (item.type === 'Folder') {
        parent.folderCount !== undefined && parent.folderCount++;
      } else {
        parent.fileCount !== undefined && parent.fileCount++;
      }
    }
  }

  // after user cancels the form input(separate component), discard the pushed dummy child from parent and reset isChild for letting user select File/Folder
  onFormCancelled(parent: Collection | null) {
    parent?.children?.pop(); //
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
      type: 'Folder',
      name: '',
      children: [],
      showOptions: true,
      selectionType: null,
      canAddChild: true,
    });
    item.canAddChild = false;
  }

  // removes particular item from parent array
  onRemove(index: number, type: collectionType): void {
    // if element to be removed is "root" folder, then remove it from whole data i.e. collectionData, else; from its "parent"
    if (this.parent === null) {
      this.store.dispatch(CollectionActions.removeFromRoot({ index }));
    } else {
      this.parent?.children?.splice(index, 1);
      if (type === 'Folder') {
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
