import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const cursosSchema = new Schema(
  {
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
    timestamps: true,
  }
);

export default model("Cursos", cursosSchema);
