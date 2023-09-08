import { Component } from '@angular/core';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private collectionService: CollectionService) {}
  collectionData = this.collectionService.collectionData;
}
