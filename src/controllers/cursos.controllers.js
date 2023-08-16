import Cursos from "../models/cursos";
import { getDb } from "../database";
import { ObjectId } from "mongodb";

export const findAllCursos = async (req, res) => {
  try {
    const db = await getDb();
    const collection = db.collection("cursos");
    const cursos = await collection.find().toArray();

    if (!db) {
      res.send(db);
    }

    res.json(cursos);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Ocurrió un error al devolver los datos generales",
    });
  }
};

export const createCursos = async (req, res) => {
  if (!req.body.nombre) {
    return res.status(400).json({ message: "Valores de cursos es requerido" });
  }

  try {
    const db = await getDb();
    const collection = db.collection("cursos");

    const newCursos = {
      id: req.body.id,
      nombre: req.body.nombre,
      puntaje: req.body.puntaje
    };

    await collection.insertOne(newCursos);

    res.json(newCursos);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error.message || "Ocurrió un error al crear los cursos",
      });
  }
};

export const findOneCursos = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = db.collection("cursos");

    const cursosSaved = await collection.findOne({ _id: ObjectId(id) });
    if (!cursosSaved) {
      return res
        .status(404)
        .json({ message: "El dato general con ese id no existe" });
    }

    res.json(cursosSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deleteCursos = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("cursos");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updateCursos = async (req, res) => {
  try {
    const db = await getDb();
    const collection = db.collection("cursos");

    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { upsert: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "Dato general actualizado" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar" });
  }
};
