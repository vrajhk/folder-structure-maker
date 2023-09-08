import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Collection, collectionType } from '../models/collection.model';

@Component({
  selector: 'app-file-folder-input',
  templateUrl: './file-folder-input.component.html',
  styleUrls: ['./file-folder-input.component.scss'],
})
export class FileFolderInputComponent {
  @Input() inputType!: collectionType;
  @Output() onSubmitEvent = new EventEmitter<string>();
  @Output() onCancelEvent = new EventEmitter<{ isShowInput: boolean }>();
  createFolderFileForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createFolderFileForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  // sends the input value to add-root-folder component if it is valid
  onSubmit(): void {
    const inputValue: string = this.createFolderFileForm
      .get('name')
      ?.value.trim();
    this.isSubmitted = true;
    if (!inputValue.length) {
      return;
    }
    // sends data to collection component for displaying the user inputted file/folder name
    this.onSubmitEvent.emit(this.createFolderFileForm.get('name')?.value);
  }

  // notifies add-root-folder component about cancel event to hide input
  onCancel(): void {
    this.onCancelEvent.emit({ isShowInput: false });
  }
}
