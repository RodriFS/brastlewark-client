webpackHotUpdate("main",{

/***/ "./src/components/Filters/Filters.js":
/*!*******************************************!*\
  !*** ./src/components/Filters/Filters.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_professions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/professions */ "./src/utils/professions.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Filters_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Filters.css */ "./src/components/Filters/Filters.css");
/* harmony import */ var _Filters_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Filters_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/RodriFS/Documents/GitHub/JobHunt/brastlewark-client/gnome-app/src/components/Filters/Filters.js";







var Filters =
/*#__PURE__*/
function (_Component) {
  Object(_Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Filters, _Component);

  function Filters() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filters);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Filters)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function (prof) {
      _this.props.filters[prof] === undefined ? _this.props.setFilter(_this.props.filters[prof] = true) : _this.props.setFilter(_this.props.filters[prof] = false);
      console.log(prof);
    };

    return _this;
  }

  Object(_Users_RodriFS_Documents_GitHub_JobHunt_brastlewark_client_gnome_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filters, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var AllProfs = Object(_utils_professions__WEBPACK_IMPORTED_MODULE_7__["getProfessions"])(this.props.gnomes);
      console.log(this.props.filters);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Filters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, AllProfs.map(function (prof, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          key: key,
          className: "Filters__button",
          onClick: function onClick() {
            return _this2.handleClick(prof);
          },
          style: _this2.props.filters[prof] ? {
            backgroundColor: 'red'
          } : {
            backgroundColor: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "Filters__button__images",
          src: __webpack_require__("./src/assets sync recursive ^\\.\\/.*\\.svg$")("./".concat(prof, ".svg")),
          alt: prof,
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), prof);
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "Filter__filter",
        onClick: console.log('hola'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Filter!")));
    }
  }]);

  return Filters;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    gnomes: state.gnomes,
    filters: state.filters
  };
};

var mapDispatchToProps = {
  setFilter: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["setFilter"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Filters)));

/***/ })

})
//# sourceMappingURL=main.9bc8f107dc235ca0e877.hot-update.js.map