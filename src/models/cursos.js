import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const cursosSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    puntaje: {
      type: Number,
      required: true,
      trim: true,
    }
  },
  {
    versionKey: false,
  }
);


export default model("Cursos", cursosSchema);
