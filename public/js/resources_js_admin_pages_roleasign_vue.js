"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_pages_roleasign_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/roleasign.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/roleasign.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Add-New-role",
  data: function data() {
    return {
      data: {
        id: null
      },
      allUserRole: [],
      resources: [],
      defaultPermissions: [{
        rName: "Home",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'home'
      }, {
        rName: "Blogs",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'blogs'
      }, {
        rName: "CreateBlog",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'createblog'
      }, {
        rName: "EditBlog",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'EditBlog'
      }, {
        rName: "Categorys",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'categories'
      }, {
        rName: "Tags",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'tags'
      }, {
        rName: "Users",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'users'
      }, {
        rName: "Add New Role",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'addnewrole'
      }, {
        rName: "Role Asign",
        read: false,
        write: false,
        update: false,
        "delete": false,
        name: 'roleasign'
      }],
      allCheckPermissions: [{
        rName: "Home",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'home'
      }, {
        rName: "Blogs",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'blogs'
      }, {
        rName: "CreateBlog",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'createblog'
      }, {
        rName: "EditBlog",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'EditBlog'
      }, {
        rName: "Categorys",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'categories'
      }, {
        rName: "Tags",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'tags'
      }, {
        rName: "Users",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'users'
      }, {
        rName: "Add New Role",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'addnewrole'
      }, {
        rName: "Role Asign",
        read: true,
        write: true,
        update: true,
        "delete": true,
        name: 'roleasign'
      }],
      helpers: {
        sending: false,
        allCheck: false
      }
    };
  },
  methods: {
    //Get all Role by call this functions.
    getAllUserRole: function getAllUserRole() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.__callApi('get', '/app/get_new_role');

              case 2:
                res = _context.sent;

                if (res.status == 200) {
                  _this.allUserRole = res.data;

                  if (res.data.length) {
                    // this.data.id = res.data[0].id;
                    // this.getAllPermissionById(this.data.id);
                    _this.sc("Role fetched");
                  }
                } else {
                  _this.er("Error");
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onRoleAsignSave: function onRoleAsignSave() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var jsonData, res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // this.helpers.sending = true;
                jsonData = JSON.stringify(_this2.resources);
                console.log(jsonData);
                _context2.next = 4;
                return _this2.__callApi('post', '/app/assign_role', {
                  permission: jsonData,
                  id: _this2.data.id
                });

              case 4:
                res = _context2.sent;

                if (res.status == 200) {
                  _this2.sc("Role Assigned Successfully");

                  _this2.getAllUserRole(); // this.resources = this.defaultPermissions;
                  // this.data.id = null;
                  // this.getAllUserRole();

                } else {
                  _this2.er('Role Not Assigned Successfully');
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getRoleOnSelectUser: function getRoleOnSelectUser() {
      var _this3 = this;

      var index = this.allUserRole.findIndex(function (role) {
        return role.id == _this3.data.id;
      });
      var permission = this.allUserRole[index].permission; // this.resources = JSON.parse(permission);

      if (permission == null) {
        this.resources = this.defaultPermissions;
      } else {
        this.resources = JSON.parse(permission);
      }
    },
    checkAll: function checkAll() {
      if (this.helpers.allCheck) {
        this.resources = this.defaultPermissions;
        this.helpers.allCheck = false;
      } else {
        this.helpers.allCheck = true;
        this.resources = this.allCheckPermissions;
      }
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this4.__callApi('get', '/app/get_new_role');

            case 2:
              res = _context3.sent;

              if (res.status == 200) {
                _this4.allUserRole = res.data;

                if (res.data.length) {// this.data.id = res.data[0].id;
                  // if(res.data[0].permission){
                  // 	this.resources = JSON.parse(res.data[0].permission);
                  // }
                }
              } else {
                _this4.er("Error");
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/roleasign.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/roleasign.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _roleasign_vue_vue_type_template_id_1f156ce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roleasign.vue?vue&type=template&id=1f156ce2& */ "./resources/js/admin/pages/roleasign.vue?vue&type=template&id=1f156ce2&");
/* harmony import */ var _roleasign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roleasign.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/roleasign.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _roleasign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _roleasign_vue_vue_type_template_id_1f156ce2___WEBPACK_IMPORTED_MODULE_0__.render,
  _roleasign_vue_vue_type_template_id_1f156ce2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/roleasign.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/roleasign.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/pages/roleasign.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roleasign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./roleasign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/roleasign.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roleasign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/roleasign.vue?vue&type=template&id=1f156ce2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/roleasign.vue?vue&type=template&id=1f156ce2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roleasign_vue_vue_type_template_id_1f156ce2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roleasign_vue_vue_type_template_id_1f156ce2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roleasign_vue_vue_type_template_id_1f156ce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./roleasign.vue?vue&type=template&id=1f156ce2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/roleasign.vue?vue&type=template&id=1f156ce2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/roleasign.vue?vue&type=template&id=1f156ce2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/roleasign.vue?vue&type=template&id=1f156ce2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      {
        staticClass:
          "_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20",
      },
      [
        _c(
          "p",
          { staticClass: "_title0 mb-4" },
          [
            _c("span", [_vm._v("Role asign")]),
            _vm._v(" "),
            _c(
              "Select",
              {
                staticStyle: { width: "250px" },
                attrs: { size: "large" },
                on: {
                  "on-change": function ($event) {
                    return _vm.getRoleOnSelectUser()
                  },
                },
                model: {
                  value: _vm.data.id,
                  callback: function ($$v) {
                    _vm.$set(_vm.data, "id", $$v)
                  },
                  expression: "data.id",
                },
              },
              _vm._l(_vm.allUserRole, function (role) {
                return _vm.isWritePermission || _vm.isUpdatePermission
                  ? _c("Option", { key: role.id, attrs: { value: role.id } }, [
                      _vm._v(_vm._s(role.roleName)),
                    ])
                  : _vm._e()
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "Checkbox",
              {
                attrs: { disabled: _vm.data.id == null ? true : false },
                on: {
                  "on-change": function ($event) {
                    return _vm.checkAll()
                  },
                },
              },
              [
                _vm._v(
                  _vm._s(_vm.helpers.allCheck ? "Uncheck all" : "Check all")
                ),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "_overflow _table_div" },
          [
            _c("div"),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass: "table table-striped table-hover disabled",
                attrs: { disabled: true },
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.resources, function (role, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(role.rName))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("Checkbox", {
                            attrs: {
                              disabled: _vm.data.id == null ? true : false,
                              value: "1",
                            },
                            model: {
                              value: role.read,
                              callback: function ($$v) {
                                _vm.$set(role, "read", $$v)
                              },
                              expression: "role.read",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("Checkbox", {
                            attrs: {
                              disabled: _vm.data.id == null ? true : false,
                              value: "1",
                            },
                            model: {
                              value: role.write,
                              callback: function ($$v) {
                                _vm.$set(role, "write", $$v)
                              },
                              expression: "role.write",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("Checkbox", {
                            attrs: {
                              disabled: _vm.data.id == null ? true : false,
                              value: "1",
                            },
                            model: {
                              value: role.update,
                              callback: function ($$v) {
                                _vm.$set(role, "update", $$v)
                              },
                              expression: "role.update",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("Checkbox", {
                            attrs: {
                              disabled: _vm.data.id == null ? true : false,
                              value: "1",
                            },
                            model: {
                              value: role.delete,
                              callback: function ($$v) {
                                _vm.$set(role, "delete", $$v)
                              },
                              expression: "role.delete",
                            },
                          }),
                        ],
                        1
                      ),
                    ])
                  }),
                  0
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "Button",
              {
                attrs: {
                  type: "primary",
                  loading: _vm.helpers.sending,
                  disabled: _vm.helpers.sending,
                },
                on: {
                  click: function ($event) {
                    return _vm.onRoleAsignSave()
                  },
                },
              },
              [_vm._v("Save All")]
            ),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white" }, [
      _c("tr", [
        _c("th", [_vm._v("Recourse Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Read")]),
        _vm._v(" "),
        _c("th", [_vm._v("Write")]),
        _vm._v(" "),
        _c("th", [_vm._v("Update")]),
        _vm._v(" "),
        _c("th", [_vm._v("Delete")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);