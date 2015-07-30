'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var prefixCls = 'ant-tag';

var AntTag = (function (_React$Component) {
  _inherits(AntTag, _React$Component);

  function AntTag() {
    _classCallCheck(this, AntTag);

    _get(Object.getPrototypeOf(AntTag.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AntTag, [{
    key: 'destroy',
    value: function destroy(e) {
      var node = _react2['default'].findDOMNode(this);
      _react2['default'].unmountComponentAtNode(node);
      node.parentNode.removeChild(node);
      this.props.onClose.call(this, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var close = this.props.closable ? _react2['default'].createElement('i', { className: "anticon anticon-cross", onClick: this.destroy.bind(this) }) : '';
      var colorClass = this.props.prefixCls + '-' + this.props.color;

      return _react2['default'].createElement(
        'div',
        { className: this.props.prefixCls + ' ' + colorClass },
        _react2['default'].createElement('a', _extends({ className: this.props.prefixCls + '-text' }, this.props)),
        close
      );
    }
  }]);

  return AntTag;
})(_react2['default'].Component);

AntTag.defaultProps = {
  prefixCls: prefixCls,
  closable: false,
  onClose: function onClose() {}
};

exports['default'] = AntTag;
module.exports = exports['default'];