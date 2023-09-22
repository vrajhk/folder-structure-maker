import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { AddRootFolderComponent } from '../add-root-folder/add-root-folder.component';
import { CollectionComponent } from '../collection/collection.component';
import { CollectionService } from '../collection/service/collection.service';
import { mockCollectionService } from 'src/app/mock-data/mock-collection.service';
import { data } from 'src/app/data';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        AddRootFolderComponent,
        CollectionComponent,
      ],
      providers: [
        { provide: CollectionService, useValue: mockCollectionService },
      ],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive updated collection data from service', () => {
    mockCollectionService.updatedRootCollection$.next(data);
    component.ngOnInit();
    expect(component.collectionData).toEqual(data);
  });
});
