import { Schema, model } from "mongoose";

/* Modelo de la base de datos Noticias */
const noticiasSchema = new Schema(
  {
    nameNoticiasEsp: {
      type: String,
      required: true,
      trim: true,
    },
    nameNoticiasEng: {
      type: String,
      required: true,
      trim: true,
    },
    contenidoEsp: {
      type: String,
      required: true,
      trim: true,
    },
    contenidoEng: {
      type: String,
      required: true,
    },
    visibilidad: {
      type: Boolean,
      required: true,
      trim: true,
    },
    img: [
      {
        type: String,
        required: true,
      },
    ],
    creador: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Noticias", noticiasSchema);
