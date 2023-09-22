import { Collection, CollectionTypeEnum } from '../models/collection.model';

export const mockFolder: Collection = {
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
    },
  ],
  canAddChild: true,
  showOptions: false,
  selectionType: null,
  minimizeChildren: false,
  folderCount: 1,
  fileCount: 1,
};
export const dummyFolder: Collection = {
  type: CollectionTypeEnum.folder,
  name: '',
  children: [],
  showOptions: true,
  selectionType: CollectionTypeEnum.folder,
  canAddChild: true,
  minimizeChildren: false,
  fileCount: 0,
  folderCount: 0,
};

export const dummyFile: Collection = {
  type: CollectionTypeEnum.file,
  name: '',
  selectionType: CollectionTypeEnum.file,
};
