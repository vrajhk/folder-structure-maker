export interface Collection {
  _id?: string;
  type?: CollectionType;
  value: string;
  children?: Collection[];
  canAddChild?: boolean;
  showOptions?: boolean;
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
