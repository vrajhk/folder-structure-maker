import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  CollectionType,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { Subscription } from 'rxjs';
import { CollectionService } from '../collection/service/collection.service';

@Component({
  selector: 'app-file-folder-input',
  templateUrl: './file-folder-input.component.html',
  styleUrls: ['./file-folder-input.component.scss'],
})
export class FileFolderInputComponent {
  @Input() inputType!: CollectionType;
  @Output() onSubmitEvent = new EventEmitter<string>();
  @Output() onCancelEvent = new EventEmitter<{ isShowInput: boolean }>();
  folderType = CollectionTypeEnum.folder;
  createFolderFileForm!: FormGroup;
  duplicateNameError: null | boolean = null;
  subscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private collectionService: CollectionService
  ) {}

  ngOnInit() {
    this.createFolderFileForm = this.fb.group({
      name: ['', [Validators.required, this.spaceValidator]],
    });
    this.subscription = this.collectionService.duplicateNameError$.subscribe(
      (errorResponse) => {
        this.duplicateNameError = errorResponse.error;
      }
    );
  }

  // throws validation error is user tries to submit only spaces and no characters in Input
  spaceValidator(control: FormControl) {
    return !control?.value?.trim().length ? { noSpaceAllowed: true } : null;
  }

  // if form is invalid then return; else send the input value to add-root-folder and collection component
  onSubmit(): void {
    const getName = this.createFolderFileForm.get('name');
    if (this.createFolderFileForm.invalid) {
      getName?.markAsTouched();
      getName?.setValue('');
      return;
    }
    // sends data to add-root-folder and collection component for displaying the user inputted file/folder name
    this.onSubmitEvent.emit(getName?.value);
  }

  // notifies add-root-folder and collection component about cancel event to hide input
  onCancel(): void {
    this.onCancelEvent.emit({ isShowInput: false });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
