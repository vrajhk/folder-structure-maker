import { Component } from '@angular/core';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from '../collection/service/collection.service';
import { ApiService } from '../collection/service/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  collectionData: Collection[] = [];
  parent!: Collection;
  constructor(
    private collectionService: CollectionService,
    private apiService: ApiService
  ) {}
  ngOnInit() {
    this.apiService.getData().subscribe((response: any) => {
      console.log(response);
      this.collectionData = response;
      console.log(this.collectionData);
    });
    // this.collectionService.updatedRootCollection$.subscribe(
    //   (rootCollection) => (this.collectionData = rootCollection)
    // );
  }
}
