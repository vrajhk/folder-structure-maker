import { ComponentFixture, TestBed, flush } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { provideMockStore } from '@ngrx/store/testing';
import { data } from 'src/app/data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  Collection,
  CollectionTypeEnum,
} from 'src/app/models/collection.model';
import { CollectionService } from './service/collection.service';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let el: DebugElement;
  let mockFolder: Collection = {
    type: CollectionTypeEnum.folder,
    name: 'Folder 1',
    children: [
      {
        type: CollectionTypeEnum.folder,
        name: 'Folder 1.1',
        children: [
          {
            type: CollectionTypeEnum.folder,
            name: 'Folder 1.1.1',
            children: [
              {
                type: CollectionTypeEnum.folder,
                name: 'Folder 1.1.1.1',
                children: [],
                canAddChild: true,
                showOptions: false,
                selectionType: null,
                minimizeChildren: false,
                folderCount: 0,
                fileCount: 0,
              },
            ],
            canAddChild: true,
            showOptions: false,
            selectionType: null,
            minimizeChildren: false,
            folderCount: 1,
            fileCount: 0,
          },
          {
            type: CollectionTypeEnum.folder,
            name: 'Folder 1.2',
            children: [],
            canAddChild: true,
            showOptions: false,
            selectionType: null,
            minimizeChildren: false,
            folderCount: 0,
            fileCount: 0,
          },
        ],
        canAddChild: true,
        showOptions: false,
        selectionType: null,
        minimizeChildren: false,
        folderCount: 2,
        fileCount: 0,
      },
      {
        type: CollectionTypeEnum.file,
        name: 'File 1.2',
        canAddChild: true,
        showOptions: false,
        selectionType: null,
      },
    ],
    canAddChild: true,
    showOptions: false,
    selectionType: null,
    minimizeChildren: false,
    folderCount: 1,
    fileCount: 1,
  };
  const dummyChild: Collection = {
    type: CollectionTypeEnum.folder,
    name: '',
    children: [],
    showOptions: true,
    selectionType: null,
    canAddChild: true,
    fileCount: 0,
    folderCount: 0,
  };
  let collectionServiceStub: Partial<CollectionService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      providers: [
        provideMockStore(),
        { provide: CollectionService, useValue: collectionServiceStub },
      ],
    });
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    collectionServiceStub = {
      sendErrorAsTrue: () => {},
      sendErrorAsNull: () => {},
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add dummy child to folder clicked only once', () => {
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

  it("should handle dummy item's properties on form submit", () => {
    component.onUserSubmittedForm('Folder 1.2', mockFolder, dummyChild);
  });
});
