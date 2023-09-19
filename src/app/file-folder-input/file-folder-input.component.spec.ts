import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';

import { FileFolderInputComponent } from './file-folder-input.component';
<<<<<<< Updated upstream:src/app/file-folder-input/file-folder-input.component.spec.ts
=======
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionComponent } from '../collection/collection.component';
import { mockCollectionService } from 'src/app/mock-data/mock-collection.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
>>>>>>> Stashed changes:src/app/components/file-folder-input/file-folder-input.component.spec.ts

describe('FileFolderInputComponent', () => {
  let component: FileFolderInputComponent;
  let fixture: ComponentFixture<FileFolderInputComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< Updated upstream:src/app/file-folder-input/file-folder-input.component.spec.ts
      declarations: [FileFolderInputComponent]
=======
      declarations: [FileFolderInputComponent],
      imports: [ReactiveFormsModule],
>>>>>>> Stashed changes:src/app/components/file-folder-input/file-folder-input.component.spec.ts
    });
    fixture = TestBed.createComponent(FileFolderInputComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the "duplicateNameError" is set as per response receivd from Behavior subject of collectionService', fakeAsync(() => {
    component.duplicateNameError = null;
    mockCollectionService.duplicateNameError$.next({ error: true });
    mockCollectionService.duplicateNameError$.subscribe((errorResponse) => {
      component.duplicateNameError = errorResponse.error;
    });
    flush();
    expect(component.duplicateNameError).toBeTrue();
  }));

  it('should submit', () => {
    component.createFolderFileForm.setValue({ name: ' ' });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.createFolderFileForm.invalid).toBeTrue();
      component.onSubmit();
      expect(component.createFolderFileForm.get('name')?.touched).toBeTrue();
      expect(component.createFolderFileForm.get('name')?.value).toBe('');
    });
  });
});
