import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const antiguedadSchema = new Schema(
  {
    valoresAntiguedad: {
      type: [Number],
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false
  }
);

export default model("Antiguedad", antiguedadSchema);
