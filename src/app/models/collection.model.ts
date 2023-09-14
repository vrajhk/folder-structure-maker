export interface Collection {
  type: CollectionType;
  name: string;
  children?: Collection[];
  canAddChild?: boolean;
  showOptions?: boolean;
  selectionType?: CollectionType | null;
  minimizeChildren?: boolean;
  folderCount?: number;
  fileCount?: number;
}

export type CollectionType = 'Folder' | 'File';
