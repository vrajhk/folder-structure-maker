import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { AddRootFolderComponent } from '../add-root-folder/add-root-folder.component';
import { CollectionComponent } from '../collection/collection.component';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../../store/app.reducer';

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
      imports: [StoreModule.forRoot(AppReducer)],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
