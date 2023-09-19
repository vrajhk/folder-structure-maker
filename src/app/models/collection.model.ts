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
export const enum CollectionTypeEnum {
  folder = 'Folder',
  file = 'File',
}
export type CollectionType =
  | CollectionTypeEnum.folder
  | CollectionTypeEnum.file;
// | 'unset'
// | null;
