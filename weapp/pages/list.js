"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  methods: {
    goDetail: function goDetail() {
      wx.navigateTo({
        url: '/pages/goods'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'8-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'8-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'8-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }}}, models: {} });