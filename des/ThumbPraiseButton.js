"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = exports.PraiseButton = function () {
    function PraiseButton(praiseCount) {
        _classCallCheck(this, PraiseButton);

        this.praiseCount = isNaN(praiseCount) ? 0 : praiseCount;
    }

    _createClass(PraiseButton, [{
        key: "favour",
        value: function favour() {
            return ++this.praiseCount;
        }
    }]);

    return PraiseButton;
}();

var ThumbPraiseButton = exports.ThumbPraiseButton = function (_PraiseButton) {
    _inherits(ThumbPraiseButton, _PraiseButton);

    function ThumbPraiseButton() {
        _classCallCheck(this, ThumbPraiseButton);

        return _possibleConstructorReturn(this, (ThumbPraiseButton.__proto__ || Object.getPrototypeOf(ThumbPraiseButton)).apply(this, arguments));
    }

    _createClass(ThumbPraiseButton, [{
        key: "favour",
        value: function favour() {
            return _get(ThumbPraiseButton.prototype.__proto__ || Object.getPrototypeOf(ThumbPraiseButton.prototype), "favour", this).call(this);
        }
    }]);

    return ThumbPraiseButton;
}(PraiseButton);