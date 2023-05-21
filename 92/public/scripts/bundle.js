"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var product = "book 2";
console.log(product);

var user = function () {
  function user() {
    _classCallCheck(this, user);
  }

  _createClass(user, [{
    key: "userInfo",
    value: function userInfo() {
      return "amirasd";
    }
  }]);

  return user;
}();

var username = new user();
console.log(username.userInfo());
