"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(process.env.PORT || 4001);
console.log('Server listen on port', process.env.PORT || 4001);