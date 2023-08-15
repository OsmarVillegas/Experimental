import modoImpresion from "../models/modoImpresion";
import { getDb } from "../database";
import { ObjectId } from "mongodb";

export const findAllModoImpresionCtrl = async (req, res) => {
  try {
    const db = await getDb();
    const collection = db.collection("modoImpresion");
    const modoImpresion = await collection.find().toArray();

    res.json(modoImpresion);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Ocurrió un error al devolver los datos del modo impresión",
    });
  }
};

export const createModoImpresionCtrl = async (req, res) => {
  if (!req.body.validar) {
    return res
      .status(400)
      .json({ message: "informacion de primaria del evento es requerido" });
  }
  try {
    const db = await getDb();
    const collection = db.collection("modoImpresion");

    const newModoImpresion = {
      validar: req.body.validar,
      id: "1"
    };

    await collection.insertOne(newModoImpresion);

    res.json(newModoImpresion);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ocurrió un error al crear los datos del modo impresión",
    });
  }
};

export const findOneModoImpresionCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("modoImpresion");

    const preparacionacademicasSaved = await collection.findOne({ _id: new ObjectId(id) });
    if (!preparacionacademicasSaved) {
      return res
        .status(404)
        .json({ message: "El dato modo impresión con ese id no existe" });
    }

    res.json(preparacionacademicasSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deleteModoImpresionCtrl = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDb();
    const collection = db.collection("modoImpresion");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updateModoImpresionCtrl = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = await db.collection("modoImpresion");

    const result = collection.updateMany(
      { id: "1" },
      { $set: { validar: req.body.validar } },
      { upsert: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe", result: result });
    }

    res.json({ message: "Dato modo impresión actualizado" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar" });
  }
  // SOME SOME SOME SOME SOME
};
