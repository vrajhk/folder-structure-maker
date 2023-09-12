import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Collection } from 'src/app/models/collection.model';
import { CollectionSelector } from '../collection/store/collection.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private store: Store) {}
  collectionData: Collection[] = [];
  ngOnInit() {
    this.store
      .select(CollectionSelector)
      .subscribe((collection) => (this.collectionData = collection));
  }
  parent: Collection | null = null; // parent===null represents "root" folder
}
