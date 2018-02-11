"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),styles={container:{width:"200%",height:"200%",transformOrigin:"50% 50%",borderRadius:"50%"},focus:{width:"100%",height:"100%",borderRadius:"50%"},contentContainer:{position:"absolute",width:"100%",textAlign:"center"},content:{display:"inline-block"}},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},objectWithoutProperties=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Slice=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onMouseOver=function(e){var t=n.props.onMouseOver;t&&t(),n.setState({focused:!0}),e.stopPropagation()},n.onMouseOut=function(e){var t=n.props.onMouseUp;t&&t(),n.setState({focused:!1}),e.stopPropagation()},n.state={focused:!1},n}return inherits(t,e),createClass(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onSelect,o=e.containerStyle,r=e.focusStyle,i=e.contentContainerStyle,s=e.contentStyle,a=e.contentHeight,c=this.state.focused,l=Object.assign({},r),u=l.background,p=objectWithoutProperties(l,["background"]),d={background:u};return React.createElement("div",{role:"button",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onMouseUp:n,onClick:function(e){return e.stopPropagation()},tabIndex:-1,style:Object.assign({},styles.container,o)},React.createElement("div",{style:c?Object.assign({},styles.focus,d):{}},React.createElement("div",{style:Object.assign({height:a+"px"},styles.contentContainer,i)},React.createElement("div",{style:Object.assign({},styles.content,s,c?p:{})},t))))}}]),t}(React.Component);Slice.defaultProps={contentHeight:32};var center={position:"absolute",borderRadius:"50%",background:"transparent"},styles$1={container:{display:"inline-block"},nav:{position:"relative",display:"inline-block",margin:0,padding:0},ul:{position:"relative",listStyle:"none",padding:0,margin:0,borderRadius:"50%",overflow:"hidden"},li:{width:"50%",height:"50%",position:"absolute",transformOrigin:"bottom right",overflow:"hidden"},center:center},PieMenu=function(e){var t=e.renderCenter,n=void 0===t||t,o=e.radius,r=void 0===o?150:o,i=e.centerX,s=e.centerY,a=e.centerRadius,c=void 0===a?50:a,l=e.centerStyle,u=void 0===l?{}:l,p=e.menuStyle,d=void 0===p?{}:p,f=e.contentHeight,b=void 0===f?32:f,y=e.children,g=y.length?360/y.length:360,h=90-g,v=h<0?45:h+g/2,O=g%180==0;return React.createElement("div",{style:Object.assign({position:i||s?"absolute":"relative",top:s-r+"px",left:i-r+"px"},styles$1.container,d)},React.createElement("nav",{style:styles$1.nav},React.createElement("ul",{style:Object.assign({width:2*r+"px",height:2*r+"px"},styles$1.ul)},React.Children.map(y,function(e,t){var n=v+g*t,o=O?0:h,i=React.cloneElement(e,{containerStyle:Object.assign({transform:"skew("+-o+"deg) rotate("+((O?90:g)/2-90)+"deg)",background:"radial-gradient(transparent "+c+"px, rgba(109, 109, 109, 0.925) "+c+"px)"},e.props.containerStyle),focusStyle:Object.assign({background:"radial-gradient(transparent "+c+"px, #424242 "+c+"px)",color:"white"},e.props.focusStyle),contentHeight:e.props.contentHeight||b,contentContainerStyle:Object.assign({top:(r-c)/2-(e.props.contentHeight||b||0)/2+"px"},e.props.contentContainerStyle),contentStyle:Object.assign({transform:"rotate("+-g*t+"deg)",color:"black"},e.props.contentStyle)});return React.createElement("li",{style:Object.assign({transform:"rotate("+n+"deg) skew("+o+"deg)"},styles$1.li)},i)})),n&&React.createElement("div",{style:Object.assign({top:"calc(50% - "+c+"px)",left:"calc(50% - "+c+"px)",width:"calc(2 * "+c+"px)",height:"calc(2 * "+c+"px)"},styles$1.center,u)})))};exports.Slice=Slice,exports.default=PieMenu;
