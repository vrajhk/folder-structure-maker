export interface Collection {
  type: collectionType;
  name: string;
  children?: Collection[];
  isShowFolderFileOption: boolean;
}

export type collectionType = 'Folder' | 'File';
