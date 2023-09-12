export interface Collection {
  type: collectionType;
  name: string;
  children?: Collection[];
  canAddChild: boolean;
  showOptions: boolean;
  selectionType: collectionType | null;
}

export type collectionType = 'Folder' | 'File';
