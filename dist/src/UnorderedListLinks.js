import { __assign } from '../node_modules/tslib/tslib.es6.js';
import '../node_modules/react/jsx-runtime.js';
import { j as jsxRuntime } from '../_virtual/jsx-runtime.js_commonjs-module.js';

var UnorderedListLinks = function (props) {
  var className = props.className,
      links = props.links,
      linksClassName = props.linksClassName;
  return jsxRuntime.exports.jsx("ul", __assign({
    className: className
  }, {
    children: (links ? links : []).map(function (link, index, array) {
      return jsxRuntime.exports.jsx("li", __assign({
        className: linksClassName
      }, {
        children: jsxRuntime.exports.jsxs("a", __assign({
          href: link.url,
          title: link.text
        }, {
          children: [link.icon, link.icon ? "\u00a0" : "", link.text]
        }), void 0)
      }), "trident-ul-" + index);
    })
  }), void 0);
};

export { UnorderedListLinks };
//# sourceMappingURL=UnorderedListLinks.js.map
