"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/* Modelo de la base de datos Eventos */
var antiguedadSchema = new _mongoose.Schema({
  valoresAntiguedad: {
    type: [Number],
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = (0, _mongoose.model)("Antiguedad", antiguedadSchema);
exports["default"] = _default;