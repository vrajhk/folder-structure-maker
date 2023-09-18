import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderInputComponent } from './file-folder-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionComponent } from '../collection/collection.component';

describe('FileFolderInputComponent', () => {
  let component: FileFolderInputComponent;
  let fixture: ComponentFixture<FileFolderInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileFolderInputComponent],
      imports: [ReactiveFormsModule],
      providers: [CollectionComponent],
    });
    fixture = TestBed.createComponent(FileFolderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
