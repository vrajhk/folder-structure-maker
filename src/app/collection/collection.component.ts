import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Collection {
  type: 'Folder' | 'File';
  name: string;
  children: Collection[];
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  createFolderFileForm!: FormGroup;
  collectionData: Collection[] = [];
  isAdd = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.createFolderFileForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  add() {
    this.isAdd = true;
  }

  onSubmit() {
    this.isAdd = false;
    console.log(this.createFolderFileForm.get('name')?.value);
    this.collectionData.push({
      type: 'Folder',
      name: this.createFolderFileForm.get('name')?.value,
      children: [],
    });
    this.createFolderFileForm.get('name')?.setValue('');
  }

  onCancel() {
    this.isAdd = false;
  }
}
