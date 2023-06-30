"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _initialSetup = require("./lib/initialSetup");
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _datosGenerales = _interopRequireDefault(require("./routes/datosGenerales.routes"));
var _antiguedad = _interopRequireDefault(require("./routes/antiguedad.routes"));
var _noticias = _interopRequireDefault(require("./routes/noticias.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
// createRoles();

app.set('pkg', _package["default"]);
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/datosGenerales', _datosGenerales["default"]);
app.use('/api/antiguedad', _antiguedad["default"]);
app.use('/api/noticias', _noticias["default"]);
var _default = app;
exports["default"] = _default;