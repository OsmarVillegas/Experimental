import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const empleadoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      trim: true,
    },
    RFC: {
      type: String,
      required: true,
      trim: true,
    },
    nombreEmpleado: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    versionKey: false
  }
);

export default model("empleados", empleadoSchema);
