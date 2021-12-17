import { __assign } from '../node_modules/tslib/tslib.es6.js';
import '../node_modules/react/jsx-runtime.js';
import { UnorderedListLinks } from './UnorderedListLinks.js';
import { j as jsxRuntime } from '../_virtual/jsx-runtime.js_commonjs-module.js';

var Footer = function (props) {
  var className = props.className,
      copyrightClassName = props.copyrightClassName,
      copyrightGroupClassName = props.copyrightGroupClassName,
      title = props.title,
      titleClassName = props.titleClassName,
      year = props.year,
      siteMapClassName = props.siteMapClassName,
      siteMapGroupClassName = props.siteMapGroupClassName,
      siteMapTitleText = props.siteMapTitleText,
      siteMapLinks = props.siteMapLinks,
      siteMapLinkClassName = props.siteMapLinkClassName,
      siteMapListClassName = props.siteMapListClassName,
      socialClassName = props.socialClassName,
      socialGroupClassName = props.socialGroupClassName,
      socialTitleText = props.socialTitleText,
      socialLinks = props.socialLinks,
      socialListClassName = props.socialListClassName,
      socialLinkClassName = props.socialLinkClassName;
  var copyrightYear = year || new Date().getFullYear();
  return jsxRuntime.exports.jsxs("footer", __assign({
    className: className
  }, {
    children: [jsxRuntime.exports.jsxs("div", __assign({
      className: copyrightGroupClassName
    }, {
      children: [jsxRuntime.exports.jsx("span", __assign({
        className: titleClassName
      }, {
        children: title
      }), void 0), jsxRuntime.exports.jsxs("span", __assign({
        className: copyrightClassName
      }, {
        children: ["\u00A9 ", copyrightYear]
      }), void 0)]
    }), void 0), jsxRuntime.exports.jsxs("div", __assign({
      className: siteMapGroupClassName
    }, {
      children: [jsxRuntime.exports.jsx("span", __assign({
        className: siteMapClassName
      }, {
        children: siteMapTitleText
      }), void 0), jsxRuntime.exports.jsx(UnorderedListLinks, {
        className: siteMapListClassName,
        links: siteMapLinks,
        linksClassName: siteMapLinkClassName
      }, void 0)]
    }), void 0), jsxRuntime.exports.jsxs("div", __assign({
      className: socialGroupClassName
    }, {
      children: [jsxRuntime.exports.jsx("span", __assign({
        className: socialClassName
      }, {
        children: socialTitleText
      }), void 0), jsxRuntime.exports.jsx(UnorderedListLinks, {
        className: socialListClassName,
        links: socialLinks,
        linksClassName: socialLinkClassName
      }, void 0)]
    }), void 0)]
  }), void 0);
};

export { Footer };
//# sourceMappingURL=footer.js.map
