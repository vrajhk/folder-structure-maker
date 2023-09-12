import { Component, Input } from '@angular/core';
import { Collection } from '../models/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  @Input() collectionData: Collection[] = [];
  isAdd = false;
  isAddClicked = false;

  // adds child folder or file; functionality not completed; currently only adds file-folder option
  onAddChild(item: Collection): void {
    item.children?.push({
      type: 'Folder',
      name: 'Folder Children 1.1',
      children: [],
      isShowFolderFileOption: true,
    });
  }

  // removes particular item from children array; functionality not completed; currently removes child instead of that particular item
  onRemove(item: Collection, i: number): void {
    item.children?.splice(i);
  }
}
