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
                rest = objectWithoutProperties(_Object$assign, ['background']);

            var focusedBgStyle = { background: background };
            var focusedStyle = rest;
            return React.createElement(
                'div',
                {
                    role: 'button',
                    onMouseOver: this.onMouseOver,
                    onMouseOut: this.onMouseOut,
                    onMouseUp: onSelect,
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
                                height: contentHeight
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
    contentHeight: '2em'
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

var PieMenu = function PieMenu(_ref) {
    var _ref$radius = _ref.radius,
        radius = _ref$radius === undefined ? '150px' : _ref$radius,
        centerX = _ref.centerX,
        centerY = _ref.centerY,
        _ref$centerRadius = _ref.centerRadius,
        centerRadius = _ref$centerRadius === undefined ? '50px' : _ref$centerRadius,
        centerStyle = _ref.centerStyle,
        _ref$contentHeight = _ref.contentHeight,
        contentHeight = _ref$contentHeight === undefined ? '2em' : _ref$contentHeight,
        children = _ref.children;

    var centralAngle = children.length ? 360 / children.length : 360;
    var deltaAngle = 90 - centralAngle;
    var startAngle = deltaAngle < 0 ? 45 : deltaAngle + centralAngle / 2;
    var polar = centralAngle % 180 === 0;
    return React.createElement(
        'div',
        {
            style: Object.assign({
                position: centerX || centerY ? 'absolute' : 'relative',
                top: 'calc(' + centerY + 'px - ' + radius + ')',
                left: 'calc(' + centerX + 'px - ' + radius + ')'
            }, styles$1.container)
        },
        React.createElement(
            'nav',
            { style: styles$1.nav },
            React.createElement(
                'ul',
                { style: Object.assign({
                    width: 'calc(2 * ' + radius + ')',
                    height: 'calc(2 * ' + radius + ')'
                }, styles$1.ul)
                },
                React.Children.map(children, function (child, i) {
                    var rotate = startAngle + centralAngle * i;
                    var skew = polar ? 0 : deltaAngle;
                    var newChild = React.cloneElement(child, {
                        containerStyle: Object.assign({
                            transform: 'skew(' + -skew + 'deg) rotate(' + ((polar ? 90 : centralAngle) / 2 - 90) + 'deg)',
                            background: 'radial-gradient(transparent ' + centerRadius + ', rgba(109, 109, 109, 0.925) ' + centerRadius + ')'
                        }, child.props.containerStyle),
                        focusStyle: Object.assign({
                            background: 'radial-gradient(transparent ' + centerRadius + ', #424242 ' + centerRadius + ')',
                            color: 'white'
                        }, child.props.focusStyle),
                        contentHeight: child.props.contentHeight || contentHeight,
                        contentContainerStyle: Object.assign({
                            top: 'calc((' + radius + ' - ' + centerRadius + ') / 2 - ' + (child.props.contentHeight || contentHeight || 0) + ' / 2)'
                        }, child.props.contentContainerStyle),
                        contentStyle: Object.assign({
                            transform: 'rotate(' + -centralAngle * i + 'deg)',
                            color: 'black'
                        }, child.props.contentStyle)
                    });
                    return React.createElement(
                        'li',
                        { style: Object.assign({
                            transform: 'rotate(' + rotate + 'deg) skew(' + skew + 'deg)'
                        }, styles$1.li)
                        },
                        newChild
                    );
                })
            ),
            React.createElement('div', { style: Object.assign({
                top: 'calc(50% - ' + centerRadius + ')',
                left: 'calc(50% - ' + centerRadius + ')',
                width: 'calc(2 * ' + centerRadius + ')',
                height: 'calc(2 * ' + centerRadius + ')'
            }, styles$1.center, centerStyle)
            })
        )
    );
};

exports.Slice = Slice;
exports['default'] = PieMenu;
//# sourceMappingURL=index.dev.js.map