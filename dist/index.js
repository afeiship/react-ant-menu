!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("@feizheng/noop"),require("object-assign"),require("@feizheng/next-tree-walk"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","antd","classnames","@feizheng/noop","object-assign","@feizheng/next-tree-walk","react-dom"],t):"object"==typeof exports?exports.ReactAntMenu=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("@feizheng/noop"),require("object-assign"),require("@feizheng/next-tree-walk"),require("react-dom")):e.ReactAntMenu=t(e["prop-types"],e.react,e.antd,e.classnames,e["@feizheng/noop"],e["object-assign"],e["@feizheng/next-tree-walk"],e["react-dom"])}(window,(function(e,t,n,r,o,u,a,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),u=(n(7),n(0)),a=n.n(u),i=n(3),c=n.n(i),l=n(4),s=n.n(l),f=n(5),p=n.n(f),y=n(2),d=n(6),b=n.n(d);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,O(t).call(this,e))).onMenuClick=function(e){var t=n.props,r=t.onChange,o=t.stop,u=e.key,a=e.keyPath,i=p()(e,{target:{value:[u]}});o&&e.domEvent.stopPropagation(),n.setState({value:[u],valuePath:a}),r(i)};var r=e.value;return n.state={value:r,valuePath:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),x(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.value;return n!==t.value?{value:n}:null}}]),x(t,[{key:"getSelected",value:function(e){var t=this.state.valuePath,n=e.children;return n&&n.length?n.find((function(e){return t.includes(e.value)})):null}},{key:"render",value:function(){var e=this.props.className;return o.a.createElement("div",{"data-component":"react-ant-menu",className:c()("react-ant-menu",e)},this.menuView)}},{key:"menuView",get:function(){var e=this,t=this.props,n=(t.value,t.highlighted),r=(t.stop,t.template),u=t.items,a=(t.onClick,v(t,["value","highlighted","stop","template","items","onClick"])),i=this.state.value,c=n?i:[];return o.a.createElement(y.Menu,h({selectedKeys:c,onClick:this.onMenuClick},a),b()(u,{template:r,callback:function(t){var n=t.item;return Object.assign({selected:e.getSelected(n)},t)}}))}}]),t}(r.Component);P.displayName="react-ant-menu",P.propTypes={className:a.a.string,value:a.a.array,onChange:a.a.func,highlighted:a.a.bool,stop:a.a.bool,items:a.a.array.isRequired,template:a.a.func.isRequired},P.defaultProps={highlighted:!1,stop:!1,items:[],value:[],template:function(e,t){var n=e.item,r=(e.selected,n.value),u=n.label;return o.a.createElement(y.Menu.SubMenu,{key:r,title:u,children:t()})},onChange:s.a};t.default=P}])}));