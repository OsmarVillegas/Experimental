import Antiguedad from "../models/antiguedad";
import { getDb } from "../database";
import { ObjectId } from "mongodb";
import { generarTextoAleatorio } from "../controllers/centroDeTrabajo.controllers"

export const findAllAntiguedad = async (req, res) => {
  try {
    const db = await getDb();
    const collection = db.collection("antiguedads");
    const antiguedad = await collection.find().toArray();

    if (!db) {
      res.send(db);
    }

    res.json(antiguedad);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error.message || "ocurrio un error al devolver los de antiguedad",
      });
  }
};

export const createAntiguedad = async (req, res) => {
  if (!req.body.valoresAntiguedad) {
    return res
      .status(400)
      .json({ message: "Valores de antiguedad es requerido" });
  }

  try {
    const db = await getDb();
    const collection = db.collection("antiguedads");

    const newAntiguedad = {
      valoresAntiguedad: req.body.valoresAntiguedad,
      id: "1"
    };

    await collection.insertOne(newAntiguedad);

    res.json(newAntiguedad);
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Ocurrió un error al crear la antiguedad",
      });
  }
};

export const findOneAntiguedad = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = db.collection("antiguedads");

    const antiguedadSaved = await collection.findOne({ id: new ObjectId(id) });
    if (!antiguedadSaved) {
      return res
        .status(404)
        .json({ message: "La antiguedad con ese id no existe" });
    }

    res.json(antiguedadSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deleteAntiguedad = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("antiguedads");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updateAntiguedad = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = await db.collection("antiguedads");

    const codigo = await generarTextoAleatorio(10);

    const result = collection.updateMany(
      { id: "1" },
      { $set: { valoresAntiguedad: req.body.valoresAntiguedad, codigoVersion: codigo } },
      { upsert: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "Dato general actualizado", result: result });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar" });
  }
};
