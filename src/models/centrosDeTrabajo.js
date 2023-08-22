import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const centrosDeTrabajoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      trim: true,
    },
    claveCentro: {
      type: String,
      required: true,
      trim: true,
    },
    nombreCentro: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    versionKey: false
  }
);

export default model("centroDeTrabajo", centrosDeTrabajoSchema);
