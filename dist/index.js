!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("@feizheng/noop"),require("object-assign"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","antd","classnames","@feizheng/noop","object-assign","react-dom"],t):"object"==typeof exports?exports.ReactAntMenu=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("@feizheng/noop"),require("object-assign"),require("react-dom")):e.ReactAntMenu=t(e["prop-types"],e.react,e.antd,e.classnames,e["@feizheng/noop"],e["object-assign"],e["react-dom"])}(window,(function(e,t,n,r,o,a,u){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=(n(6),n(0)),u=n.n(a),i=n(3),c=n.n(i),l=n(4),s=n.n(l),p=n(5),f=n.n(p),y=n(2);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,v(t).call(this,e))).onMenuClick=function(e){var t=e.domEvent;n.props.stopPropagation&&t.stopProppagation(),n.change(e)};var r=e.value;return n.state={value:r,valuePath:[]},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"getSelected",value:function(e){var t=this.state.valuePath,n=e.children;return n&&n.length?n.find((function(e){return t.includes(e.value)})):null}},{key:"change",value:function(e){var t=this.props.onChange,n=e.key,r=e.keyPath;this.setState({value:[n],valuePath:r},(function(){var r=f()(e,{target:{value:[n]}});t(r)}))}},{key:"render",value:function(){var e=this.props.className;return o.a.createElement("div",{"data-component":"react-ant-menu",className:c()("react-ant-menu",e)},this.menuView)}},{key:"menuView",get:function(){var e=this,t=this.props,n=(t.value,t.highlighted),r=t.template,a=t.items,u=(t.stopPropagation,b(t,["value","highlighted","template","items","stopPropagation"])),i=this.state.value,c=n?i:[];return o.a.createElement(y.Menu,m({selectedKeys:c,onClick:this.onMenuClick},u),function t(n){return n.map((function(n,o){var a=n.children,u=a&&a.length,i={item:n,index:o,selected:e.getSelected(n)},c=u?[i,function(){return t(a)}]:[i];return r.apply(e,c)}))}(a))}}])&&h(n.prototype,r),a&&h(n,a),t}(r.Component);j.displayName="react-ant-menu",j.propTypes={className:u.a.string,value:u.a.array,onChange:u.a.func,highlighted:u.a.bool,stopPropagation:u.a.bool,items:u.a.array.isRequired,template:u.a.func.isRequired},j.defaultProps={highlighted:!1,stopPropagation:!1,items:[],value:[],template:function(e,t){var n=e.item,r=(e.selected,n.value),a=n.label;return t?o.a.createElement(y.Menu.SubMenu,{key:r,title:a,children:t()}):o.a.createElement(y.Menu.Item,{key:r},a)},onChange:s.a};t.default=j}])}));