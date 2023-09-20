import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';

import { FileFolderInputComponent } from './file-folder-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionComponent } from '../collection/collection.component';
import { mockCollectionService } from 'src/app/mock-data/mock-collection.service';

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

  it('should check if the "duplicateNameError" is set as per response received from Behavior subject of collectionService', fakeAsync(() => {
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
