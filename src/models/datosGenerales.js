import { Schema, model } from "mongoose";

/* Modelo de la base de datos Eventos */
const datosGeneralesSchema = new Schema(
  {
    municipio: {
      type: String,
      required: true,
      trim: true,
    },
    anio: {
      type: String,
      required: true,
      trim: true,
    },
    etapa: {
      type: String,
      required: true,
      trim: true,
    },
    fechaLimite: {
      type: String,
      required: true,
      trim: true,
    },
    periodoEvaluado: {
      type: String,
      required: true,
      trim: true,
    },
    etapaConLetra: {
      type: String,
      required: true,
      trim: true,
    },
    codigoVersion: {
      type: String,
      require: true,
      trim: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("datosGenerales", datosGeneralesSchema);
