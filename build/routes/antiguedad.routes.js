"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var antiguedadCtrl = _interopRequireWildcard(require("../controllers/antiguedad.controllers"));
var _middlewares = require("../middlewares");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.post('/', antiguedadCtrl.createAntiguedad);
router.get('/', antiguedadCtrl.findAllAntiguedad);
router.get('/:id', antiguedadCtrl.findOneAntiguedad);
router["delete"]('/:id', antiguedadCtrl.deleteAntiguedad);
router.put('/:id', antiguedadCtrl.updateAntiguedad);

// router.post('/', authJwt.verifyToken,eventosCtrl.createEventos);

// router.get('/', eventosCtrl.findAllEventos);

// router.get('/:id',eventosCtrl.findOneEvento);

// router.delete('/:id', authJwt.verifyToken,eventosCtrl.deleteEvento);

// router.put('/:id', authJwt.verifyToken,eventosCtrl.updateEvento);
var _default = router;
exports["default"] = _default;