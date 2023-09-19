import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import {
  Collection,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { CollectionService } from './service/collection.service';
import { mockCollectionService } from '../../mock-data/mock-collection.service';
import {
  dummyFile,
  dummyFolder,
  mockFolder,
} from 'src/app/mock-data/mock-folder-file-data';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      providers: [
        { provide: CollectionService, useValue: mockCollectionService },
      ],
    });
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add dummy child to clicked folder only once', () => {
    if (mockFolder.children) {
      const childrenLength = mockFolder.children.length;
      component.onAddChild(mockFolder);
      expect(mockFolder.children.length).toBe(childrenLength + 1);

      // when calling again the length should not change
      component.onAddChild(mockFolder);
      expect(mockFolder.children.length).toBe(childrenLength + 1);
    }
  });

  it('should set correct selectionType of folder clicked', () => {
    expect(mockFolder.selectionType).toBe(null);
    component.triggerInput(mockFolder, CollectionTypeEnum.folder);
    expect(mockFolder.selectionType).toBe(CollectionTypeEnum.folder);
  });

  it('should reset user file/folder selection', () => {
    component.takeBackAfterSelection(mockFolder);
    expect(mockFolder.selectionType).toBe(null);
  });

  // it is triggered after user selects type i.e. folder or file
  it("should handle dummy child and its parent's properties on form submit based on child's selectionType(folder/file)", () => {
    let parent = mockFolder?.children?.at(0) as Collection;
    const folderCountBeforeSubmit = parent.folderCount as number;
    const fileCountBeforeSubmit = parent.fileCount as number;
    spyOn(mockCollectionService, 'sendErrorAsTrue');
    spyOn(mockCollectionService, 'sendErrorAsNull');

    // if same folder/file name exists; then function must immediately return; Hence, parent.folderCount and parent.fileCOunt should remain unchanged
    component.onUserSubmittedForm('Folder 1.2', parent, dummyFolder);
    expect(mockCollectionService.sendErrorAsTrue).toHaveBeenCalled();
    expect(mockCollectionService.sendErrorAsNull).toHaveBeenCalledTimes(0);
    expect(parent.folderCount).toEqual(folderCountBeforeSubmit);
    expect(parent.fileCount).toEqual(fileCountBeforeSubmit);

    // else increment folderCount/fileCount of it's parent
    component.onUserSubmittedForm('New Folder', parent, dummyFolder);
    expect(parent.folderCount).toEqual(folderCountBeforeSubmit + 1);
    expect(dummyFolder.name).toBe('New Folder');
    component.onUserSubmittedForm('File 5', parent, dummyFile);
    expect(parent.fileCount).toEqual(fileCountBeforeSubmit + 1);
    expect(dummyFile.name).toBe('File 5');
    expect(mockCollectionService.sendErrorAsNull).toHaveBeenCalledTimes(2);
  });

  it('should remove the added dummy child on cancelling the input form', () => {
    component.onAddChild(mockFolder);
    const folderLengthAfterAddingChild = mockFolder.children?.length as number;
    spyOn(mockCollectionService, 'sendErrorAsNull');
    component.onFormCancelled(mockFolder);
    expect(mockFolder.children?.length as number).toEqual(
      folderLengthAfterAddingChild - 1
    );
    expect(mockCollectionService.sendErrorAsNull).toHaveBeenCalledTimes(1);
  });

  it('should remove clicked child item from its parent', () => {
    component.parent = mockFolder;
    const childIndexToBeRemoved: number = 1;
    const removedChildName = (mockFolder.children as Collection[])[
      childIndexToBeRemoved
    ].name;
    component.onRemove(1, CollectionTypeEnum.file);
    expect(
      mockFolder.children?.findIndex((el) => el.name === removedChildName)
    ).toBe(-1);
  });

  it('should toggle minimizeChildren property of clicked folder', () => {
    const isMinimize = mockFolder.minimizeChildren;
    component.minimizeChildren(mockFolder);
    expect(mockFolder.minimizeChildren).toBe(!isMinimize);
    component.minimizeChildren(mockFolder);
    expect(mockFolder.minimizeChildren).toBe(isMinimize);
  });
});
