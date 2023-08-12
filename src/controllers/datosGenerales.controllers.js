import datosGenerales from "../models/datosGenerales";
import { getDb } from "../database";
import { ObjectId } from "mongodb";

export const findAllDatosGenerales = async (req, res) => {
  try {
    const db = await getDb();
    const collection = db.collection("datosgenerales");
    const datosgenerales = await collection.find().toArray();

    if (!db) {
      res.send(db);
    }

    res.json(datosgenerales);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error.message || "Ocurrió un error al devolver los datos generales",
      });
  }
};

export const createDatosGenerales = async (req, res) => {
  if (!req.body.municipio) {
    return res
      .status(400)
      .json({ message: "Municipio del evento es requerido" });
  }

  try {
    const db = await getDb();
    const collection = db.collection("datosgenerales");

    const newDatosGenerales = {
      municipio: req.body.municipio,
      anio: req.body.anio,
      etapa: req.body.etapa,
      fechaLimite: req.body.fechaLimite,
      periodoEvaluado: req.body.periodoEvaluado,
      etapaConLetra: req.body.etapaConLetra,
    };

    await collection.insertOne(newDatosGenerales);

    res.json(newDatosGenerales);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error.message || "Ocurrió un error al crear los datos generales",
      });
  }
};

export const findOneDatosGenerales = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("datosgenerales");

    const datosGeneralesSaved = await collection.findOne({ _id: new ObjectId(id) });
    if (!datosGeneralesSaved) {
      return res
        .status(404)
        .json({ message: "El dato general con ese id no existe" });
    }

    res.json(datosGeneralesSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deleteDatosGenerales = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("datosgenerales");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updateDatosGenerales = async (req, res) => {
  const { id } = await req.params;
  try {
    // const db = await getDb();
    // const collection = await db.collection("datosgenerales");

    // const result = await collection.updateOne(
    //   { _id: await new ObjectId("649f5b46072eb717863bcd92") },
    //   { $set: req.body }
    // );
    // SOME SOME SOME
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }
    
    res.json({ message: "Dato general actualizado" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar PUT", error: error });
  }
};
