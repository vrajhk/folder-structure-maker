import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderInputComponent } from './file-folder-input.component';

describe('FileFolderInputComponent', () => {
  let component: FileFolderInputComponent;
  let fixture: ComponentFixture<FileFolderInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileFolderInputComponent]
    });
    fixture = TestBed.createComponent(FileFolderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
