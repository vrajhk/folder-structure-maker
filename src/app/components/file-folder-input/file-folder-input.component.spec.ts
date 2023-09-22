import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderInputComponent } from './file-folder-input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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

  it('should check if the "duplicateNameError" is set as per response received from Behavior subject of collectionService', () => {
    // BehaviorSubject must return correct error as provided in next()
    component.duplicateNameError = null;
    mockCollectionService.duplicateNameError$.subscribe((errorResponse) => {
      component.duplicateNameError = errorResponse.error;
    });
    mockCollectionService.duplicateNameError$.next({ error: true });
    expect(component.duplicateNameError).toBeTrue();
  });

  it('should handle input on submit', () => {
    // when the input name is invalid, return making that input as touched and value to empty string
    component.createFolderFileForm.setValue({ name: ' ' });
    expect(component.createFolderFileForm.invalid).toBeTrue();
    component.onSubmit();
    expect(component.createFolderFileForm.get('name')?.value).toBe('');
    expect(component.createFolderFileForm.get('name')?.touched).toBeTrue();

    // when input value is valid, emit its value using onSubmitEvent
    component.createFolderFileForm.get('name')?.setValue('new name');
    component.onSubmitEvent.subscribe((emittedValue) => {
      expect(emittedValue).toBe('new name');
    });
    component.onSubmit();
  });

  it('should emit correct onCancelEvent on calling onCancel method', () => {
    component.onCancelEvent.subscribe((emittedValue) => {
      expect(emittedValue).toEqual({ isShowInput: false });
    });
    component.onCancel();
  });

  it('should correctly return from spaceValidator method', () => {
    let control = new FormControl(' ');
    //when invalid input value, returns errorStatus as {noSpaceAllowed:true}
    expect(component.spaceValidator(control)).toEqual({
      noSpaceAllowed: true,
    });
    //when valid input value, returns errorStatus as null
    control.setValue('new value');
    expect(component.spaceValidator(control)).toEqual(null);
  });
});
