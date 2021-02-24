import {Collection, MongoClient} from "mongodb";

import yieldsData from "../data/yield.json";
import swaptionvolmtxData from "../data/swaptionvolmtx.json";

const username = process.env.MONGO_USERNAME || "root";
const password = process.env.MONGO_PASSWORD || "example";
const host = process.env.MONGO_HOST || "localhost";
const port = process.env.MONGO_PORT || "27017";
const db = process.env.MONGO_DATABASE || "market_data";

const uri = `mongodb://${username}:${password}@${host}:${port}/?poolSize=20&writeConcern=majority`;

export const mongo: Promise<MongoClient> = new Promise((resolve) => {
  const client = new MongoClient(uri);
  client
    .connect()
    .then((client) => {
      const newDb = client.db(db);
      const yields = newDb.collection("yields");
      const swaptionvolmtx = newDb.collection("swaptionvolmtxs");
      return Promise.all([yields.deleteMany({}), swaptionvolmtx.deleteMany({})]).then(() =>
        Promise.all([yields.insertMany(yieldsData), swaptionvolmtx.insertMany(swaptionvolmtxData)])
      );
    })
    .then(() => resolve(client));
});

mongo
  .then((client) => client.db(db).command({ping: 1}))
  .then(() => {
    console.log("Connected successfully to server");
  });

export function collectionFactory<T>(collection: string): Promise<Collection<T>> {
  return mongo.then((client) => client.db(db).collection<T>(collection));
}
