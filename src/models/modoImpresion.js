import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const modoImpresionSchema = new Schema(
  {
    validar: {
      type: [Boolean],
      required: true,
      trim: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("modoImpresion", modoImpresionSchema);
