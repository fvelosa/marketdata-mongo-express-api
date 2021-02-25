import {FindAndModifyWriteOpResultObject} from "mongodb";

export interface CollectionService<T> {
  getAll(): Promise<T[]>;

  get(id: string): Promise<T | null>;

  remove(id: string): Promise<void | FindAndModifyWriteOpResultObject<T>>;
}
