import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AddRootFolderComponent } from './add-root-folder.component';

describe('AddRootFolderComponent', () => {
  let component: AddRootFolderComponent;
  let fixture: ComponentFixture<AddRootFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRootFolderComponent],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(AddRootFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add folder to root if same folder with same name does not exist; else send error flag as true to input component', () => {});
});
