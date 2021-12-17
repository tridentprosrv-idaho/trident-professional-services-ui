import { __assign } from '../node_modules/tslib/tslib.es6.js';
import '../node_modules/react/jsx-runtime.js';
import { TridentProfessionaServicesUI } from './TridentProfessionaServicesUISettings.js';
import './responsive-img.css.js';
import { j as jsxRuntime } from '../_virtual/jsx-runtime.js_commonjs-module.js';

var BlogHeadline = function (props) {
  var className = props.className,
      blogPostHeadline = props.blogPostHeadline,
      blogPostImageUrl = props.blogPostImageUrl,
      blogPostSummary = props.blogPostSummary,
      blogImageStyleClass = props.blogImageStyleClass,
      blogPostHeadlineClassName = props.blogPostHeadlineClassName,
      blogPostHeadlineContainerClassName = props.blogPostHeadlineContainerClassName;
  return jsxRuntime.exports.jsxs("article", __assign({
    className: className
  }, {
    children: [jsxRuntime.exports.jsx("header", __assign({
      className: blogPostHeadlineContainerClassName
    }, {
      children: jsxRuntime.exports.jsx("h2", __assign({
        className: blogPostHeadlineClassName
      }, {
        children: blogPostHeadline
      }), void 0)
    }), void 0), jsxRuntime.exports.jsxs("figure", {
      children: [jsxRuntime.exports.jsx("div", {
        style: {
          backgroundImage: blogPostImageUrl ? "url(" + blogPostImageUrl + ")" : undefined
        },
        className: blogImageStyleClass || TridentProfessionaServicesUI.DefaultResponsiveImageCSSClass
      }, void 0), jsxRuntime.exports.jsx("figcaption", {
        children: blogPostSummary
      }, void 0)]
    }, void 0)]
  }), void 0);
};

export { BlogHeadline };
//# sourceMappingURL=blogheadline.js.map
