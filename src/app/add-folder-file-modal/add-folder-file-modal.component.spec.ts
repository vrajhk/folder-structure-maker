import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFolderFileModalComponent } from './add-folder-file-modal.component';

describe('AddFolderFileModalComponent', () => {
  let component: AddFolderFileModalComponent;
  let fixture: ComponentFixture<AddFolderFileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFolderFileModalComponent]
    });
    fixture = TestBed.createComponent(AddFolderFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
