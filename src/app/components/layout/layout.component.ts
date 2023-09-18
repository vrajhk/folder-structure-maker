import { Component } from '@angular/core';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from '../collection/service/collection.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private collectionService: CollectionService) {}
  ngOnInit() {
    this.collectionService.updatedRootCollection$.subscribe(
      (rootCollection) => (this.collectionData = rootCollection)
    );
  }
  collectionData: Collection[] = [];
  parent!: Collection; // parent===null represents "root" folder
}
