import { Injectable } from '@angular/core';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor() {}

  // dummy content for verify purpose
  collectionData: Collection[] = [
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
                  isShowFolderFileOption: false,
                },
              ],
              isShowFolderFileOption: false,
            },
            {
              type: 'Folder',
              name: 'Folder 1.2',
              children: [],
              isShowFolderFileOption: false,
            },
          ],
          isShowFolderFileOption: false,
        },
        {
          type: 'File',
          name: 'File 1.2',
          isShowFolderFileOption: false,
        },
      ],
      isShowFolderFileOption: false,
    },
    {
      type: 'Folder',
      name: 'Folder 2',
      children: [
        {
          type: 'Folder',
          name: 'Folder 2.1',
          children: [],
          isShowFolderFileOption: false,
        },
      ],
      isShowFolderFileOption: false,
    },
  ];
}
