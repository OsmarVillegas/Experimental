import mongoose from "mongoose";
import { MongoClient } from "mongodb"

export var db;

MongoClient
  .connect("mongodb+srv://optimen:optimen@cluster0.1jii1an.mongodb.net/test", {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then((client) => {
    console.log("DB is connected");
    db = client.db()
  })
  .catch((error) => console.log(error));
