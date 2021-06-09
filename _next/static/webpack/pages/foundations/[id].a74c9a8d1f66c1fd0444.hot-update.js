webpackHotUpdate_N_E("pages/foundations/[id]",{

/***/ "./components/IconSearch.tsx":
/*!***********************************!*\
  !*** ./components/IconSearch.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/allen.kleiner/code/evergreen/docs/components/IconSearch.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Pane = evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"Pane\"],\n    majorScale = evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"majorScale\"],\n    Text = evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"Text\"];\n\nvar Item = function Item(_ref) {\n  var name = _ref.name;\n  var readableName = name.slice(0, name.indexOf('Icon')); // @ts-ignore\n\n  if (evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[name]) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pane, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      flexDirection: \"column\",\n      children: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[name], {\n        size: majorScale(3),\n        color: 'default',\n        marginBottom: majorScale(3)\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, {\n        color: \"muted\",\n        size: 300,\n        maxWidth: \"100%\",\n        wordBreak: \"break-all\",\n        children: readableName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return null;\n  }\n};\n\n_c = Item;\n\nvar IconSearch = function IconSearch() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var iconComponentNames = Object.keys(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__).filter(function (componentName) {\n    return componentName.endsWith('Icon') && componentName !== 'Icon';\n  }).filter(function (componentName) {\n    return componentName.toLowerCase().indexOf(query.toLowerCase()) !== -1;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pane, {\n    width: \"100%\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      query: query,\n      onQueryChange: setQuery,\n      placeholder: \"Search through icons below:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pane, {\n      marginTop: majorScale(5),\n      display: \"grid\",\n      rowGap: majorScale(3),\n      columnGap: majorScale(8),\n      gridTemplateColumns: \"repeat(auto-fill, 80px)\",\n      children: iconComponentNames.map(function (componentName) {\n        console.log(componentName.slice(0, componentName.indexOf('Icon')));\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Item, {\n          name: componentName\n        }, componentName, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 18\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(IconSearch, \"qO/HZodsWTfJhuzZtdaxiosei2U=\");\n\n_c2 = IconSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconSearch);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c2, \"IconSearch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29uU2VhcmNoLnRzeD84M2EzIl0sIm5hbWVzIjpbIlBhbmUiLCJldmVyZ3JlZW4iLCJtYWpvclNjYWxlIiwiVGV4dCIsIkl0ZW0iLCJuYW1lIiwicmVhZGFibGVOYW1lIiwic2xpY2UiLCJpbmRleE9mIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic2l6ZSIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiSWNvblNlYXJjaCIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImljb25Db21wb25lbnROYW1lcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJjb21wb25lbnROYW1lIiwiZW5kc1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFFUUEsSSxHQUEyQkMsaUQ7SUFBckJDLFUsR0FBcUJELHVEO0lBQVRFLEksR0FBU0YsaUQ7O0FBSW5DLElBQU1HLElBQWdDLEdBQUcsU0FBbkNBLElBQW1DLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDckQsTUFBTUMsWUFBWSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWNGLElBQUksQ0FBQ0csT0FBTCxDQUFhLE1BQWIsQ0FBZCxDQUFyQixDQURxRCxDQUVyRDs7QUFDQSxNQUFJUCx5Q0FBUyxDQUFDSSxJQUFELENBQWIsRUFBcUI7QUFDbkIsd0JBQ0UscUVBQUMsSUFBRDtBQUFNLGFBQU8sRUFBQyxNQUFkO0FBQXFCLG9CQUFjLEVBQUMsUUFBcEM7QUFBNkMsZ0JBQVUsRUFBQyxRQUF4RDtBQUFpRSxtQkFBYSxFQUFDLFFBQS9FO0FBQUEsOEJBRUdJLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JULHlDQUFTLENBQUNJLElBQUQsQ0FBN0IsRUFBNEM7QUFDM0NNLFlBQUksRUFBRVQsVUFBVSxDQUFDLENBQUQsQ0FEMkI7QUFFM0NVLGFBQUssRUFBRSxTQUZvQztBQUczQ0Msb0JBQVksRUFBRVgsVUFBVSxDQUFDLENBQUQ7QUFIbUIsT0FBNUMsQ0FGSCxlQU9FLHFFQUFDLElBQUQ7QUFBTSxhQUFLLEVBQUMsT0FBWjtBQUFvQixZQUFJLEVBQUUsR0FBMUI7QUFBK0IsZ0JBQVEsRUFBQyxNQUF4QztBQUErQyxpQkFBUyxFQUFDLFdBQXpEO0FBQUEsa0JBQ0dJO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBYUQsR0FkRCxNQWNPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQXBCRDs7S0FBTUYsSTs7QUFxQk4sSUFBTVUsVUFBMkIsR0FBRyxTQUE5QkEsVUFBOEIsR0FBTTtBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFTLEVBQVQsQ0FETTtBQUFBLE1BQ2pDQyxLQURpQztBQUFBLE1BQzFCQyxRQUQwQjs7QUFHeEMsTUFBTUMsa0JBQWtCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbkIseUNBQVosRUFDeEJvQixNQUR3QixDQUNqQixVQUFDQyxhQUFEO0FBQUEsV0FBbUJBLGFBQWEsQ0FBQ0MsUUFBZCxDQUF1QixNQUF2QixLQUFrQ0QsYUFBYSxLQUFLLE1BQXZFO0FBQUEsR0FEaUIsRUFFeEJELE1BRndCLENBRWpCLFVBQUNDLGFBQUQ7QUFBQSxXQUFtQkEsYUFBYSxDQUFDRSxXQUFkLEdBQTRCaEIsT0FBNUIsQ0FBb0NRLEtBQUssQ0FBQ1EsV0FBTixFQUFwQyxNQUE2RCxDQUFDLENBQWpGO0FBQUEsR0FGaUIsQ0FBM0I7QUFJQSxzQkFDRSxxRUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxrREFBRDtBQUFXLFdBQUssRUFBRVIsS0FBbEI7QUFBeUIsbUJBQWEsRUFBRUMsUUFBeEM7QUFBa0QsaUJBQVcsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQ0UsZUFBUyxFQUFFZixVQUFVLENBQUMsQ0FBRCxDQUR2QjtBQUVFLGFBQU8sRUFBQyxNQUZWO0FBR0UsWUFBTSxFQUFFQSxVQUFVLENBQUMsQ0FBRCxDQUhwQjtBQUlFLGVBQVMsRUFBRUEsVUFBVSxDQUFDLENBQUQsQ0FKdkI7QUFLRSx5QkFBbUIsRUFBQyx5QkFMdEI7QUFBQSxnQkFPR2dCLGtCQUFrQixDQUFDTyxHQUFuQixDQUF1QixVQUFDSCxhQUFELEVBQW1CO0FBQ3pDSSxlQUFPLENBQUNDLEdBQVIsQ0FBWUwsYUFBYSxDQUFDZixLQUFkLENBQW9CLENBQXBCLEVBQXVCZSxhQUFhLENBQUNkLE9BQWQsQ0FBc0IsTUFBdEIsQ0FBdkIsQ0FBWjtBQUNBLDRCQUFPLHFFQUFDLElBQUQ7QUFBMEIsY0FBSSxFQUFFYztBQUFoQyxXQUFXQSxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUhBO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBeEJEOztHQUFNUixVOztNQUFBQSxVO0FBMEJTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSWNvblNlYXJjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInXG5pbXBvcnQgKiBhcyBldmVyZ3JlZW4gZnJvbSAnZXZlcmdyZWVuLXVpJ1xuXG5jb25zdCB7IFBhbmUsIG1ham9yU2NhbGUsIFRleHQgfSA9IGV2ZXJncmVlblxuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgSXRlbTogUmVhY3QuRkM8eyBuYW1lOiBzdHJpbmcgfT4gPSAoeyBuYW1lIH0pID0+IHtcbiAgY29uc3QgcmVhZGFibGVOYW1lID0gbmFtZS5zbGljZSgwLCBuYW1lLmluZGV4T2YoJ0ljb24nKSlcbiAgLy8gQHRzLWlnbm9yZVxuICBpZiAoZXZlcmdyZWVuW25hbWVdKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICB7LyogIEB0cy1pZ25vcmUgKi99XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGV2ZXJncmVlbltuYW1lXSBhcyBhbnksIHtcbiAgICAgICAgICBzaXplOiBtYWpvclNjYWxlKDMpLFxuICAgICAgICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBtYWpvclNjYWxlKDMpLFxuICAgICAgICB9KX1cbiAgICAgICAgPFRleHQgY29sb3I9XCJtdXRlZFwiIHNpemU9ezMwMH0gbWF4V2lkdGg9XCIxMDAlXCIgd29yZEJyZWFrPVwiYnJlYWstYWxsXCI+XG4gICAgICAgICAge3JlYWRhYmxlTmFtZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5jb25zdCBJY29uU2VhcmNoOiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPignJylcblxuICBjb25zdCBpY29uQ29tcG9uZW50TmFtZXMgPSBPYmplY3Qua2V5cyhldmVyZ3JlZW4pXG4gICAgLmZpbHRlcigoY29tcG9uZW50TmFtZSkgPT4gY29tcG9uZW50TmFtZS5lbmRzV2l0aCgnSWNvbicpICYmIGNvbXBvbmVudE5hbWUgIT09ICdJY29uJylcbiAgICAuZmlsdGVyKChjb21wb25lbnROYW1lKSA9PiBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgIDxTZWFyY2hCYXIgcXVlcnk9e3F1ZXJ5fSBvblF1ZXJ5Q2hhbmdlPXtzZXRRdWVyeX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGhyb3VnaCBpY29ucyBiZWxvdzpcIiAvPlxuICAgICAgPFBhbmVcbiAgICAgICAgbWFyZ2luVG9wPXttYWpvclNjYWxlKDUpfVxuICAgICAgICBkaXNwbGF5PVwiZ3JpZFwiXG4gICAgICAgIHJvd0dhcD17bWFqb3JTY2FsZSgzKX1cbiAgICAgICAgY29sdW1uR2FwPXttYWpvclNjYWxlKDgpfVxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZmlsbCwgODBweClcIlxuICAgICAgPlxuICAgICAgICB7aWNvbkNvbXBvbmVudE5hbWVzLm1hcCgoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudE5hbWUuc2xpY2UoMCwgY29tcG9uZW50TmFtZS5pbmRleE9mKCdJY29uJykpKVxuICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2NvbXBvbmVudE5hbWV9IG5hbWU9e2NvbXBvbmVudE5hbWV9IC8+XG4gICAgICAgIH0pfVxuICAgICAgPC9QYW5lPlxuICAgIDwvUGFuZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uU2VhcmNoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/IconSearch.tsx\n");

/***/ })

})