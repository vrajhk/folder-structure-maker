export interface Collection {
  type: collectionType;
  name: string;
  children?: Collection[];
  canAddChild?: boolean;
  showOptions?: boolean;
  selectionType?: collectionType | null;
  minimizeChildren?: boolean;
  folderCount?: number;
  fileCount?: number;
}

export type collectionType = 'Folder' | 'File';
