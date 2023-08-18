import { MongoClient } from "mongodb";

let db;

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://optimen:optimen@cluster0.1jii1an.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB is connected");
    return client.db();
  } catch (error) {
    console.error(error);
  }
}

connectToDatabase();

export async function getDb() {
  try {
    db = await connectToDatabase(); // Obtiene la referencia a la base de datos
    // Aquí puedes usar db para realizar operaciones en la base de datos
    return db
  } catch (error) {
    console.error(error);
  }
}
