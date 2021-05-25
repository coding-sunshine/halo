(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_DetailForm_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DetailForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DetailForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "detail_form",
  data: function data() {
    return {
      name: "",
      email: "",
      company: "",
      success: "",
      errors: [],
      loader: false,
      companyList: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["avatar", "shared_photo"])),
  mounted: function mounted() {
    this.fetchCompanyList();
  },
  methods: {
    fetchCompanyList: function fetchCompanyList() {
      var currentObj = this;
      currentObj.loader = true;
      axios.get("/api/companyList").then(function (response) {
        currentObj.loader = false;
        currentObj.companyList = response.data;
      })["catch"](function (error) {
        currentObj.loader = false;
        currentObj.error = error;
        console.log(error);
        alert("Something Went wrong!");
      });
    },
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data, currentObj;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errors = [];

                if (!_this.name) {
                  _this.errors.push("Name required.");
                }

                if (!_this.email) {
                  _this.errors.push("Email required.");
                } else if (!_this.validEmail(_this.email)) {
                  _this.errors.push("Valid email required.");
                }

                if (!_this.company) {
                  _this.errors.push("Company Name required.");
                }

                if (!_this.errors.length) {
                  _this.loader = true;
                  data = {
                    name: _this.name,
                    email: _this.email,
                    company: _this.company,
                    profile_photo: _this.avatar,
                    shared_photo: _this.shared_photo
                  };
                  currentObj = _this;
                  axios.post("/api/detailSubmit", data).then(function (response) {
                    currentObj.success = response.data.success;
                    var validation = response.data.validation;

                    if (validation) {
                      Object.keys(validation).map(function (key) {
                        validation[key].forEach(function (element) {
                          currentObj.errors.push(element);
                        });
                      });
                    }

                    currentObj.loader = false;

                    if (currentObj.success) {
                      alert(currentObj.success);
                    }

                    currentObj.$store.dispatch("setAvatarPath", "");
                    currentObj.$store.dispatch("setSharedPhotoPath", "");
                    currentObj.$router.push("/");
                  })["catch"](function (error) {
                    currentObj.loader = false;
                    console.log(error);
                    alert("Something Went wrong!");
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validEmail: function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/DetailForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/DetailForm.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailForm_vue_vue_type_template_id_4e72ac9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailForm.vue?vue&type=template&id=4e72ac9e& */ "./resources/js/Pages/DetailForm.vue?vue&type=template&id=4e72ac9e&");
/* harmony import */ var _DetailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/DetailForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DetailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DetailForm_vue_vue_type_template_id_4e72ac9e___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetailForm_vue_vue_type_template_id_4e72ac9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/DetailForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/DetailForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/DetailForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DetailForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/DetailForm.vue?vue&type=template&id=4e72ac9e&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/DetailForm.vue?vue&type=template&id=4e72ac9e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailForm_vue_vue_type_template_id_4e72ac9e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailForm_vue_vue_type_template_id_4e72ac9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailForm_vue_vue_type_template_id_4e72ac9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailForm.vue?vue&type=template&id=4e72ac9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DetailForm.vue?vue&type=template&id=4e72ac9e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DetailForm.vue?vue&type=template&id=4e72ac9e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/DetailForm.vue?vue&type=template&id=4e72ac9e& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "p",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loader,
            expression: "loader"
          }
        ]
      },
      [_vm._v("Loading...")]
    ),
    _vm._v(" "),
    _vm.errors.length
      ? _c("p", [
          _c("b", [_vm._v("Please correct the following error(s):")]),
          _vm._v(" "),
          _c(
            "ul",
            _vm._l(_vm.errors, function(error, i) {
              return _c("li", { key: i }, [_vm._v(_vm._s(error))])
            }),
            0
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.name,
          expression: "name"
        }
      ],
      attrs: { type: "text", name: "name", id: "name" },
      domProps: { value: _vm.name },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.email,
          expression: "email"
        }
      ],
      attrs: { type: "email", name: "email", id: "email" },
      domProps: { value: _vm.email },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.email = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("label", { attrs: { for: "company" } }, [_vm._v("Company Name")]),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.company,
            expression: "company"
          }
        ],
        attrs: { name: "company", id: "company" },
        on: {
          change: function($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function(o) {
                return o.selected
              })
              .map(function(o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.company = $event.target.multiple
              ? $$selectedVal
              : $$selectedVal[0]
          }
        }
      },
      _vm._l(_vm.companyList, function(company, key) {
        return _c("option", { key: key, domProps: { value: key } }, [
          _vm._v(_vm._s(company))
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "custom-button",
        attrs: { disabled: _vm.loader },
        on: {
          click: function($event) {
            return _vm.submit()
          }
        }
      },
      [_c("span", [_vm._v("Submit")])]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);