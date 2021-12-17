import { __assign } from '../node_modules/tslib/tslib.es6.js';
import '../node_modules/react/jsx-runtime.js';
import './responsive-img.css.js';
import { TridentProfessionaServicesUI } from './TridentProfessionaServicesUISettings.js';
import { j as jsxRuntime } from '../_virtual/jsx-runtime.js_commonjs-module.js';

var Testimonial = function (props) {
  var className = props.className,
      testimonialAvatarImg = props.testimonialAvatarImg,
      testimonialAvatarClass = props.testimonialAvatarClass,
      testimonialName = props.testimonialName,
      testimonialNameClass = props.testimonialNameClass,
      testimonial = props.testimonial,
      testimonialClassName = props.testimonialClassName;
  return jsxRuntime.exports.jsxs("article", __assign({
    className: className
  }, {
    children: [testimonialAvatarImg ? jsxRuntime.exports.jsxs("figure", {
      children: [jsxRuntime.exports.jsx("div", {
        style: {
          backgroundImage: "url(" + testimonialAvatarImg + ")"
        },
        className: testimonialAvatarClass || TridentProfessionaServicesUI.DefaultResponsiveImageCSSClass
      }, void 0), jsxRuntime.exports.jsx("figcaption", __assign({
        className: testimonialNameClass
      }, {
        children: testimonialName
      }), void 0)]
    }, void 0) : jsxRuntime.exports.jsx("h3", __assign({
      className: testimonialNameClass
    }, {
      children: testimonialName
    }), void 0), jsxRuntime.exports.jsx("p", __assign({
      className: testimonialClassName
    }, {
      children: testimonial
    }), void 0)]
  }), void 0);
};

export { Testimonial };
//# sourceMappingURL=testimonial.js.map
