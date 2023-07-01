import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const preparacionAcademicaSchema = new Schema(
  {
    primaria: {
      type: [Number],
      required: true,
      trim: true,
    },
    secundaria: {
      type: [Number],
      required: true,
      trim: true,
    },
    carreraC: {
      type: [Number],
      required: true,
      trim: true,
    },
    licenciatura: {
      type: [Number],
      required: true,
      trim: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("preparacionAcademica", preparacionAcademicaSchema);
