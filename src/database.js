// import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://optimen:optimen@cluster0.1jii1an.mongodb.net/test", {
//     useNewUrlParser: true,
//     useUniFiedTopology: true,
// })
//     .then(db => console.log('DB is connected'))
//     .catch(error => console.log(error))

import { MongoClient } from "mongodb"

let db;

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect("mongodb+srv://optimen:optimen@cluster0.1jii1an.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
    db = client.db();
  } catch (error) {
    console.error(error);
  }
}

connectToDatabase();

export { db };