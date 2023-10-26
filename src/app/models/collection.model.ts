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
