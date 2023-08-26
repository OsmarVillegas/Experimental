import centroDeTrabajo from "../models/centrosDeTrabajo";
import { getDb } from "../database";
import { ObjectId } from "mongodb";

export const findAllCentroDeTrabajo = async (req, res) => {
  let claveCentro = await req.query.claveCentro;
  try {
    const db = await getDb();
    const collection = db.collection("centroDeTrabajo");

    if(claveCentro === undefined){
      claveCentro = "";
    }
    
    const centroDeTrabajo = await collection.find({claveCentro: {$regex: `${claveCentro}`}}).toArray();

    console.log(claveCentro)

    if (!db) {
      res.send(db);
    }

    res.send(centroDeTrabajo)
    // res.json(centroDeTrabajo);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error.message || "ocurrio un error al devolver los de centro de trabajo",
      });
  }
};

export const createCentroDeTrabajo = async (req, res) => {
  if (!req.body.claveCentro) {
    return res
      .status(400)
      .json({ message: "Valores de centro de trabajo son requerido" });
  }

  try {
    const db = await getDb();
    const collection = db.collection("centroDeTrabajo");

    const newClaveCentroDeTrabajo = {
      id: req.body.id,
      claveCentro: req.body.claveCentro,
      nombreCentro: req.body.nombreCentro
    };

    await collection.insertOne(newClaveCentroDeTrabajo);

    res.json(newClaveCentroDeTrabajo);
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Ocurrió un error al crear el centro de trabajo",
      });
  }
};

export const findOneCentroDeTrabajo = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = db.collection("centroDeTrabajo");

    const claveCentroTrabajoSaved = await collection.findOne({ id: new ObjectId(id) });
    if (!claveCentroTrabajoSaved) {
      return res
        .status(404)
        .json({ message: "El centro de trabajo con ese id no existe" });
    }

    res.json(claveCentroTrabajoSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deleteCentroDeTrabajo = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("centroDeTrabajo");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updateCentroDeTrabajo = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = await db.collection("centroDeTrabajo");

    const result = collection.updateMany(
      { id: "1" },
      { $set: { id: req.body.id,
        claveCentro: req.body.claveCentro,
        nombreCentro: req.body.nombreCentro } },
      { upsert: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "Dato de centro de trabajo actualizado", result: result });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar" });
  }
};

export async function generarTextoAleatorio(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let textoAleatorio = '';

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    textoAleatorio += caracteres.charAt(indice);
  }

  return textoAleatorio;
}