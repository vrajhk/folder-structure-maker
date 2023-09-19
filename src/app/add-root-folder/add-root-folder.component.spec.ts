import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< Updated upstream:src/app/add-root-folder/add-root-folder.component.spec.ts

=======
>>>>>>> Stashed changes:src/app/components/add-root-folder/add-root-folder.component.spec.ts
import { AddRootFolderComponent } from './add-root-folder.component';
import { CollectionService } from '../collection/service/collection.service';
import { mockCollectionService } from '../../mock-data/mock-collection.service';
import { mockFolder } from 'src/app/mock-data/mock-folder-file-data';

describe('AddRootFolderComponent', () => {
  let component: AddRootFolderComponent;
  let fixture: ComponentFixture<AddRootFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< Updated upstream:src/app/add-root-folder/add-root-folder.component.spec.ts
      declarations: [AddRootFolderComponent]
=======
      declarations: [AddRootFolderComponent],
      providers: [
        { provide: CollectionService, useValue: mockCollectionService },
      ],
>>>>>>> Stashed changes:src/app/components/add-root-folder/add-root-folder.component.spec.ts
    });
    fixture = TestBed.createComponent(AddRootFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< Updated upstream:src/app/add-root-folder/add-root-folder.component.spec.ts
=======

  it('should add folder to root if same folder with same name does not exist, calling sendErrorAsNull from service; else call sendErrorAsTrue', () => {
    component.rootCollection = [mockFolder];
    spyOn(mockCollectionService, 'sendErrorAsTrue');
    spyOn(mockCollectionService, 'sendErrorAsNull');
    spyOn(mockCollectionService, 'sendUpdatedRootCollection');
    component.onUserSubmittedForm(mockFolder.name);
    expect(mockCollectionService.sendErrorAsTrue).toHaveBeenCalledTimes(1);

    component.onUserSubmittedForm('New Root Folder');
    expect(mockCollectionService.sendErrorAsTrue).toHaveBeenCalledTimes(1);
    expect(component.rootCollection.length).toBe(2);
    expect(component.rootCollection.at(-1)?.name).toBe('New Root Folder');
    expect(
      mockCollectionService.sendUpdatedRootCollection
    ).toHaveBeenCalledTimes(1);
  });

  it('should call sendErrorAsNull of collectionService and set isAdd to false', () => {
    spyOn(mockCollectionService, 'sendErrorAsNull');
    component.onFormCancelled({ isShowInput: false });
    expect(mockCollectionService.sendErrorAsNull).toHaveBeenCalled();
    expect(component.isAdd).toBeFalse();
  });

  it('should set isAdd to true on clicking add()', () => {
    component.add();
    expect(component.isAdd).toBeTrue();
  });
>>>>>>> Stashed changes:src/app/components/add-root-folder/add-root-folder.component.spec.ts
});
