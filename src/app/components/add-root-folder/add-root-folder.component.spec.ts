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
});
