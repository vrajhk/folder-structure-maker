import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AddRootFolderComponent } from '../add-root-folder/add-root-folder.component';
import { CollectionComponent } from '../collection/collection.component';

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
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
