"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/* Modelo de la base de datos Eventos */
var datosGeneralesSchema = new _mongoose.Schema({
  municipio: {
    type: String,
    required: true,
    trim: true
  },
  anio: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = (0, _mongoose.model)("datosGenerales", datosGeneralesSchema);
exports["default"] = _default;