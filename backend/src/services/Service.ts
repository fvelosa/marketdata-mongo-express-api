import {ObjectWithID} from "../entities/";
import {Collection, ObjectID, FindAndModifyWriteOpResultObject} from "mongodb";
import {CollectionService} from "./inteface";
import {collectionFactory} from "./mongo.service";

export class Service<T extends ObjectWithID> implements CollectionService<T> {
  collection: Promise<Collection<T>>;

  constructor(collection: string) {
    this.collection = collectionFactory<T>(collection);
  }

  async getAll(): Promise<T[]> {
    return (await this.collection).find().toArray();
  }

  async get(id: string): Promise<T | null> {
    return (await this.collection).findOne({_id: new ObjectID(id)} as any);
  }

  async remove(id: string): Promise<void | FindAndModifyWriteOpResultObject<T>> {
    return await (await this.collection).findOneAndDelete({_id: new ObjectID(id)} as any);
  }
}
