(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReportView"],{

/***/ "./src/PresentationalComponents/LoadingState/LoadingState.tsx":
/*!********************************************************************!*\
  !*** ./src/PresentationalComponents/LoadingState/LoadingState.tsx ***!
  \********************************************************************/
/*! exports provided: LoadingState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingState", function() { return LoadingState; });
var LoadingState = function LoadingState(_ref) {
  var loading = _ref.loading,
      placeholder = _ref.placeholder,
      children = _ref.children;
  return loading ? placeholder : children;
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingState);

/***/ }),

/***/ "./src/PresentationalComponents/ReportListPage/ReportListPage.tsx":
/*!************************************************************************!*\
  !*** ./src/PresentationalComponents/ReportListPage/ReportListPage.tsx ***!
  \************************************************************************/
/*! exports provided: ReportListPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListPage", function() { return ReportListPage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");









;
var ReportListPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ReportListPage, _Component);

  function ReportListPage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReportListPage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ReportListPage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReportListPage, [{
    key: "toIndex",
    value: function toIndex(event) {
      event.preventDefault();
      this.props.history.push('/reports');
    }
  }, {
    key: "showRootLink",
    value: function showRootLink() {
      return this.props.history && this.props.history.location.pathname !== '/reports' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbItem"], {
        to: "#",
        onClick: this.toIndex
      }, "Reports") : '';
    }
  }, {
    key: "showBreadcrumb",
    value: function showBreadcrumb() {
      return this.props.showBreadcrumb && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Breadcrumb"], {
        style: {
          marginLeft: 'calc(var(--pf-c-content--ol--MarginLeft) * -1 * 2)'
        }
      }, this.showRootLink(), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbItem"], {
        isActive: true,
        style: {
          marginTop: 0
        }
      }, this.props.title));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__["PageHeader"], null, this.showBreadcrumb(), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__["PageHeaderTitle"], {
        title: title
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_7__["Main"], {
        style: this.props.mainStyle
      }, children));
    }
  }]);

  return ReportListPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ReportListPage));

/***/ }),

/***/ "./src/SmartComponents/ReportView/ReportView.tsx":
/*!*******************************************************!*\
  !*** ./src/SmartComponents/ReportView/ReportView.tsx ***!
  \*******************************************************/
/*! exports provided: ReportView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportView", function() { return ReportView; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _PresentationalComponents_ReportListPage_ReportListPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../PresentationalComponents/ReportListPage/ReportListPage */ "./src/PresentationalComponents/ReportListPage/ReportListPage.tsx");
/* harmony import */ var _PresentationalComponents_LoadingState_LoadingState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/LoadingState/LoadingState */ "./src/PresentationalComponents/LoadingState/LoadingState.tsx");
/* harmony import */ var _actions_ReportActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/ReportActions */ "./src/actions/ReportActions.tsx");
/* harmony import */ var _Utilities_formatValue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Utilities/formatValue */ "./src/Utilities/formatValue.js");















;
;
var ReportView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ReportView, _React$Component);

  function ReportView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReportView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ReportView).call(this, props));
    _this.state = {
      reportId: props.match.params.reportId
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReportView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var id = this.state.reportId;

      if (id) {
        this.props.fetchReport(id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          report = _this$props.report,
          error = _this$props.error;
      var reportId = this.state.reportId;

      if (!reportId || error) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
          to: "/reports"
        });
      }

      var action = !this.props.loading && report ? report.id : '';
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PresentationalComponents_ReportListPage_ReportListPage__WEBPACK_IMPORTED_MODULE_11__["ReportListPage"], {
        title: "Report ".concat(action),
        showBreadcrumb: false
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PresentationalComponents_LoadingState_LoadingState__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: this.props.loading,
        placeholder: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
          centered: true
        })
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Card"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["CardBody"], null, report ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pf-c-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dt", null, "Customer id:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd", null, report.customerId), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dt", null, "File name:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd", null, report.fileName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dt", null, "Number of hosts:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd", null, report.numberOfHosts.toLocaleString()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dt", null, "Total disk space:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd", null, report.totalDiskSpace.toLocaleString(), " B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dt", null, "Total price:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd", null, Object(_Utilities_formatValue__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(report.totalPrice, 'usd')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dt", null, "Creation date:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("dd", null, new Date(report.creationDate).toUTCString())), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "secondary",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/reports"
      }, "Back")) : ''))));
    }
  }]);

  return ReportView;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  var _state$reports = state.reports,
      report = _state$reports.report,
      loading = _state$reports.loading,
      error = _state$reports.error;
  return {
    report: report,
    loading: loading,
    error: error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    fetchReport: _actions_ReportActions__WEBPACK_IMPORTED_MODULE_13__["fetchReport"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(ReportView)));

/***/ }),

/***/ "./src/Utilities/formatValue.js":
/*!**************************************!*\
  !*** ./src/Utilities/formatValue.js ***!
  \**************************************/
/*! exports provided: unitLookupKey, formatCurrency, formatUsageGb, formatUsageHrs, formatValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitLookupKey", function() { return unitLookupKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatUsageGb", function() { return formatUsageGb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatUsageHrs", function() { return formatUsageHrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
var unitLookupKey = function unitLookupKey(unit) {
  var lookup = unit ? unit.toLowerCase() : '';
  return lookup;
};
var formatCurrency = function formatCurrency(value, unit) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$fractionDigits = _ref.fractionDigits,
      fractionDigits = _ref$fractionDigits === void 0 ? 2 : _ref$fractionDigits;

  var fValue = value;

  if (!value) {
    fValue = 0;
  }

  return fValue.toLocaleString('en', {
    style: 'currency',
    currency: unit || 'USD',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  });
};

var unknownTypeFormatter = function unknownTypeFormatter(value, _unit) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      fractionDigits = _ref2.fractionDigits;

  return value.toFixed(fractionDigits);
};

var formatUsageGb = function formatUsageGb(value, _unit) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$fractionDigits = _ref3.fractionDigits,
      fractionDigits = _ref3$fractionDigits === void 0 ? 2 : _ref3$fractionDigits;

  return value.toFixed(fractionDigits);
};
var formatUsageHrs = function formatUsageHrs(value, _unit) {
  var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      fractionDigits = _ref4.fractionDigits;

  return value.toFixed(fractionDigits);
};
var formatValue = function formatValue(value, unit) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var lookup = unitLookupKey(unit);
  var fValue = value || 0;

  switch (lookup) {
    case 'usd':
      return formatCurrency(fValue, lookup, options);

    case 'gb':
    case 'gb-hours':
    case 'gb-mo':
      return formatUsageGb(fValue, lookup, options);

    case 'core-hours':
    case 'hrs':
      return formatUsageHrs(fValue, lookup, options);

    default:
      return unknownTypeFormatter(fValue, lookup, options);
  }
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ReportView.js.map