"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/* Modelo de la base de datos Noticias */
var noticiasSchema = new _mongoose.Schema({
  nameNoticiasEsp: {
    type: String,
    required: true,
    trim: true
  },
  nameNoticiasEng: {
    type: String,
    required: true,
    trim: true
  },
  contenidoEsp: {
    type: String,
    required: true,
    trim: true
  },
  contenidoEng: {
    type: String,
    required: true
  },
  visibilidad: {
    type: Boolean,
    required: true,
    trim: true
  },
  img: [{
    type: String,
    required: true
  }],
  creador: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = (0, _mongoose.model)("Noticias", noticiasSchema);
exports["default"] = _default;