import preparacionAcademica from "../models/preparacionAcademica";
import { getDb } from "../database";
import { ObjectId } from "mongodb";
import { generarTextoAleatorio } from "../controllers/centroDeTrabajo.controllers"

export const findAllPreparacionAcademicaCtrl = async (req, res) => {
  try {
    const db = await getDb();
    const collection = db.collection("preparacionacademicas");
    const preparacionacademicas = await collection.find().toArray();

    res.json(preparacionacademicas);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Ocurrió un error al devolver los datos generales",
    });
  }
};

export const createPreparacionAcademicaCtrl = async (req, res) => {
  if (!req.body.primaria) {
    return res
      .status(400)
      .json({ message: "informacion de primaria del evento es requerido" });
  }
  try {
    const db = await getDb();
    const collection = db.collection("preparacionacademicas");

    const newPreparacionAcademica = {
      primaria: req.body.primaria,
      secundaria: req.body.secundaria,
      carreraC: req.body.carreraC,
      licenciatura: req.body.licenciatura,
    };

    await collection.insertOne(newPreparacionAcademica);

    res.json(newPreparacionAcademica);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ocurrió un error al crear los datos generales",
    });
  }
};

export const findOnePreparacionAcademicaCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("preparacionacademicas");

    const preparacionacademicasSaved = await collection.findOne({ _id: new ObjectId(id) });
    if (!preparacionacademicasSaved) {
      return res
        .status(404)
        .json({ message: "El dato general con ese id no existe" });
    }

    res.json(preparacionacademicasSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deletePreparacionAcademicaCtrl = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDb();
    const collection = db.collection("preparacionacademicas");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updatePreparacionAcademicaCtrl = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = await db.collection("preparacionacademicas");

    const codigo = await generarTextoAleatorio(10);

    const result = collection.updateMany(
      { id: "1" },
      { $set: { primaria: req.body.primaria, secundaria: req.body.secundaria, carreraC: req.body.carreraC, licenciatura: req.body.licenciatura, codigoVersion: codigo  } },
      { upsert: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe", result: result });
    }

    res.json({ message: "Dato general actualizado" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar" });
  }
};
