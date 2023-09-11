import { Component, Input } from '@angular/core';
import { Collection, collectionType } from '../models/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  @Input() collectionData: Collection[] = [];
  @Input() parent: Collection | null = null; // parent===null represents "root" folder

  // sets item's select type and trigger it on UI
  triggerInput(item: Collection, type: collectionType) {
    item.selectionType = type;
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
    parent && (parent.canAddChild = true); // reset canAddChild of it's parent to let parent add another item
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
    // else; push dummy child for showing file-folder select option and later apply necessary changes through "onUserSubmittedForm()"
    item.children?.push({
      type: 'Folder',
      name: 'Dummy',
      children: [],
      showOptions: true,
      selectionType: null,
      canAddChild: true,
    });
    item.canAddChild = true;
  }

  // removes particular item from parent array
  onRemove(index: number): void {
    // if element to be removed is "root" folder, then remove it from whole data i.e. collectionData, else; from its "parent"
    this.parent === null
      ? this.collectionData.splice(index, 1)
      : this.parent?.children?.splice(index, 1);
  }
}
