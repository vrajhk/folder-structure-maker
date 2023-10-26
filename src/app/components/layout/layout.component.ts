import { Component } from '@angular/core';
import { Collection } from 'src/app/models/collection.model';
import { CollectionService } from '../collection/service/collection.service';
import { ApiService } from '../collection/service/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}
  ngAfterViewInit(): void {
    this.spinner.show();
  }
  ngOnInit() {
    // this.spinner.show();
    this.apiService.getCollectionData().subscribe((response: any) => {
      this.spinner.hide();
      this.collectionData = response;
    });
    this.collectionService.updatedRootCollection$.subscribe(
      (rootCollection) => (this.collectionData = rootCollection)
    );
  }
}
