import { Collection } from './models/collection.model';

export const data: Collection[] = [
  {
    type: 'Folder',
    name: 'Folder 1',
    children: [
      {
        type: 'Folder',
        name: 'Folder 1.1',
        children: [
          {
            type: 'Folder',
            name: 'Folder 1.1.1',
            children: [
              {
                type: 'Folder',
                name: 'Folder 1.1.1.1',
                children: [],
                canAddChild: true,
                showOptions: false,
                selectionType: null,
              },
            ],
            canAddChild: true,
            showOptions: false,
            selectionType: null,
          },
          {
            type: 'Folder',
            name: 'Folder 1.2',
            children: [],
            canAddChild: true,
            showOptions: false,
            selectionType: null,
          },
        ],
        canAddChild: true,
        showOptions: false,
        selectionType: null,
      },
      {
        type: 'File',
        name: 'File 1.2',
        canAddChild: true,
        showOptions: false,
        selectionType: null,
      },
    ],
    canAddChild: true,
    showOptions: false,
    selectionType: null,
  },
  {
    type: 'Folder',
    name: 'Folder 2',
    children: [
      {
        type: 'Folder',
        name: 'Folder 2.1',
        children: [],
        canAddChild: true,
        showOptions: false,
        selectionType: null,
      },
    ],
    canAddChild: true,
    showOptions: false,
    selectionType: null,
  },
];
