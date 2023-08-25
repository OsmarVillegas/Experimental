import empleados from "../models/empleados";
import { getDb } from "../database";
import { ObjectId } from "mongodb";

export const findAllEmpleados = async (req, res) => {
  let RFC = await req.query.nombre;
  try {
    const db = await getDb();
    const collection = db.collection("empleados");

    if(RFC === undefined){
      RFC = "";
    }

    const empleados = await collection.find({RFC: {$regex: `${RFC}`}}).toArray();

    if (!db) {
      res.send(db);
    }

    res.json(empleados);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error.message || "ocurrio un error al devolver los de empleado",
      });
  }
};

export const createEmpleados = async (req, res) => {
  if (!req.body.RFC) {
    return res
      .status(400)
      .json({ message: "Valores de empleado son requerido" });
  }

  try {
    const db = await getDb();
    const collection = db.collection("empleados");

    const newEmpleados = {
      id: req.body.id,
      RFC: req.body.RFC,
      nombreEmpleado: req.body.nombreEmpleado
    };

    await collection.insertOne(newEmpleados);

    res.json(newEmpleados);
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message || "Ocurrió un error al crear el empleado",
      });
  }
};

export const findOneEmpleados = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = db.collection("empleados");

    const EmpleadosSaved = await collection.findOne({ id: new ObjectId(id) });
    if (!EmpleadosSaved) {
      return res
        .status(404)
        .json({ message: "El empleado con ese id no existe" });
    }

    res.json(EmpleadosSaved);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error con ese id" });
  }
};

export const deleteEmpleados = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await getDb();
    const collection = db.collection("empleados");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "El dato con ese id no existe" });
    }

    res.json({ message: "El dato ha sido eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error, el dato no fue eliminado" });
  }
};

export const updateEmpleados = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await getDb();
    const collection = await db.collection("empleados");

    const result = collection.updateMany(
      { id: "1" },
      { $set: { id: req.body.id,
        RFC: req.body.RFC,
        nombreEmpleado: req.body.nombreEmpleado } },
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
