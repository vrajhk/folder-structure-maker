export interface Collection {
  _id: string;
  type: CollectionType;
  value: string;
  children: Collection[];
  canAddChild?: boolean;
  showOptions?: boolean;
  selectionType?: CollectionType | null;
  minimizeChildren?: boolean;
  folderCount?: number;
  fileCount?: number;
}
export const enum CollectionTypeEnum {
  folder = 'folder',
  file = 'file',
}
export type CollectionType =
  | CollectionTypeEnum.folder
  | CollectionTypeEnum.file;

export interface ApiResponse {
  _id: string;
  value: string;
  type: CollectionType;
  children: ApiResponse[];
}
