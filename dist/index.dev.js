'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {
  container: {
    width: '200%',
    height: '200%',
    transformOrigin: '50% 50%',
    borderRadius: '50%'
  },
  focus: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center'
  },
  content: {
    display: 'inline-block'
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Slice = function (_React$Component) {
  inherits(Slice, _React$Component);

  function Slice(props) {
    classCallCheck(this, Slice);

    var _this = possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).call(this, props));

    _this.onMouseOver = function (event) {
      var onMouseOver = _this.props.onMouseOver;

      if (onMouseOver) {
        onMouseOver();
      }
      _this.setState({ focused: true });
      event.stopPropagation();
    };

    _this.onMouseOut = function (event) {
      var onMouseUp = _this.props.onMouseUp;

      if (onMouseUp) {
        onMouseUp();
      }
      _this.setState({ focused: false });
      event.stopPropagation();
    };

    _this.state = {
      focused: false
    };
    return _this;
  }

  createClass(Slice, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onSelect = _props.onSelect,
          containerStyle = _props.containerStyle,
          focusStyle = _props.focusStyle,
          contentContainerStyle = _props.contentContainerStyle,
          contentStyle = _props.contentStyle,
          contentHeight = _props.contentHeight;
      var focused = this.state.focused;

      var _Object$assign = Object.assign({}, focusStyle),
          background = _Object$assign.background,
          focusedStyle = objectWithoutProperties(_Object$assign, ['background']);

      var focusedBgStyle = { background: background };
      return React.createElement(
        'div',
        {
          role: 'button',
          onMouseOver: this.onMouseOver,
          onMouseOut: this.onMouseOut,
          onMouseUp: onSelect,
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          onFocus: function onFocus() {},
          onBlur: function onBlur() {},
          tabIndex: -1,
          style: Object.assign({}, styles.container, containerStyle)
        },
        React.createElement(
          'div',
          { style: focused ? Object.assign({}, styles.focus, focusedBgStyle) : {} },
          React.createElement(
            'div',
            {
              style: Object.assign({
                height: contentHeight + 'px'
              }, styles.contentContainer, contentContainerStyle)
            },
            React.createElement(
              'div',
              { style: Object.assign({}, styles.content, contentStyle, focused ? focusedStyle : {})
              },
              children
            )
          )
        )
      );
    }
  }]);
  return Slice;
}(React.Component);

Slice.defaultProps = {
  contentHeight: 32
};

var center = {
  position: 'absolute',
  borderRadius: '50%',
  background: 'transparent'
};

var styles$1 = {
  container: {
    display: 'inline-block'
  },
  nav: {
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    padding: 0
  },
  ul: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    borderRadius: '50%',
    overflow: 'hidden'
  },
  li: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    transformOrigin: 'bottom right',
    overflow: 'hidden'
  },
  center: center
};

/* eslint-disable no-param-reassign */
var PieMenu = function PieMenu(_ref) {
  var _ref$renderCenter = _ref.renderCenter,
      renderCenter = _ref$renderCenter === undefined ? true : _ref$renderCenter,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 150 : _ref$radius,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      _ref$centerRadius = _ref.centerRadius,
      centerRadius = _ref$centerRadius === undefined ? 50 : _ref$centerRadius,
      _ref$centerStyle = _ref.centerStyle,
      centerStyle = _ref$centerStyle === undefined ? {} : _ref$centerStyle,
      _ref$menuStyle = _ref.menuStyle,
      menuStyle = _ref$menuStyle === undefined ? {} : _ref$menuStyle,
      _ref$contentHeight = _ref.contentHeight,
      contentHeight = _ref$contentHeight === undefined ? 32 : _ref$contentHeight,
      startAngle = _ref.startAngle,
      _ref$spreadAngle = _ref.spreadAngle,
      spreadAngle = _ref$spreadAngle === undefined ? 360 : _ref$spreadAngle,
      children = _ref.children;

  var centralAngle = children.length ? spreadAngle / children.length : spreadAngle;
  var deltaAngle = 90 - centralAngle;
  var offset = 0;
  if (startAngle === undefined) {
    startAngle = deltaAngle < 0 ? 45 : deltaAngle + centralAngle / 2;
  } else {
    offset = startAngle - (deltaAngle + centralAngle / 2);
  }

  console.log(startAngle, centralAngle, deltaAngle, spreadAngle);
  return React.createElement(
    'div',
    {
      style: Object.assign({
        position: centerX || centerY ? 'absolute' : 'relative',
        top: centerY - radius + 'px',
        left: centerX - radius + 'px'
      }, styles$1.container, menuStyle)
    },
    React.createElement(
      'nav',
      { style: styles$1.nav },
      React.createElement(
        'ul',
        { style: Object.assign({
            width: 2 * radius + 'px',
            height: 2 * radius + 'px'
          }, styles$1.ul)
        },
        React.Children.map(children, function (child, i) {
          var rotate = startAngle + centralAngle * i;
          var newChild = React.cloneElement(child, {
            containerStyle: Object.assign({
              transform: 'skew(' + -deltaAngle + 'deg) rotate(' + (centralAngle / 2 - 90) + 'deg)',
              background: 'radial-gradient(transparent ' + centerRadius + 'px, rgba(109, 109, 109, 0.925) ' + centerRadius + 'px)'
            }, child.props.containerStyle),
            focusStyle: Object.assign({
              background: 'radial-gradient(transparent ' + centerRadius + 'px, #424242 ' + centerRadius + 'px)',
              color: 'white'
            }, child.props.focusStyle),
            contentHeight: child.props.contentHeight || contentHeight,
            contentContainerStyle: Object.assign({
              top: (radius - centerRadius) / 2 - (child.props.contentHeight || contentHeight || 0) / 2 + 'px'
            }, child.props.contentContainerStyle),
            contentStyle: Object.assign({
              transform: 'rotate(' + -(offset + centralAngle * i) + 'deg)',
              color: 'black'
            }, child.props.contentStyle)
          });
          return React.createElement(
            'li',
            { style: Object.assign({
                transform: 'rotate(' + rotate + 'deg) skew(' + deltaAngle + 'deg)'
              }, styles$1.li)
            },
            newChild
          );
        })
      ),
      renderCenter && React.createElement('div', { style: Object.assign({
          top: 'calc(50% - ' + centerRadius + 'px)',
          left: 'calc(50% - ' + centerRadius + 'px)',
          width: 'calc(2 * ' + centerRadius + 'px)',
          height: 'calc(2 * ' + centerRadius + 'px)'
        }, styles$1.center, centerStyle)
      })
    )
  );
};

exports.Slice = Slice;
exports['default'] = PieMenu;
//# sourceMappingURL=index.dev.js.map
