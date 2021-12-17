import { __assign } from '../node_modules/tslib/tslib.es6.js';
import '../node_modules/react/jsx-runtime.js';
import '../node_modules/react/index.js';
import './navigation.css.js';
import { TridentProfessionaServicesUI } from './TridentProfessionaServicesUISettings.js';
import { UnorderedListLinks } from './UnorderedListLinks.js';
import { r as react } from '../_virtual/index.js_commonjs-module.js';
import { j as jsxRuntime } from '../_virtual/jsx-runtime.js_commonjs-module.js';

var _MobileNavigationState;

(function (_MobileNavigationState) {
  _MobileNavigationState[_MobileNavigationState["show"] = 0] = "show";
  _MobileNavigationState[_MobileNavigationState["hide"] = 1] = "hide";
})(_MobileNavigationState || (_MobileNavigationState = {}));

var reducer = function (state, action) {
  switch (action) {
    case _MobileNavigationState.hide:
      return {
        status: _MobileNavigationState.hide
      };

    case _MobileNavigationState.show:
      return {
        status: _MobileNavigationState.show
      };

    default:
      return state;
  }
};

var Navigation = function (props) {
  var className = props.className,
      hiddenElementCSS = props.hiddenElementCSS,
      liClassName = props.liClassName,
      mobileHideNavButtonClassName = props.mobileHideNavButtonClassName,
      mobileHideNavButtonElement = props.mobileHideNavButtonElement,
      mobileShowNavButtonClassName = props.mobileShowNavButtonClassName,
      mobileShowNavButtonElement = props.mobileShowNavButtonElement,
      mobileButtonWrapperCSSClassName = props.mobileButtonWrapperCSSClassName,
      mobileNavStartsHidden = props.mobileNavStartsHidden,
      navClassName = props.navClassName,
      navigationLinks = props.navigationLinks,
      ulClassName = props.ulClassName;
  var hiddenElementCSSClass = hiddenElementCSS || TridentProfessionaServicesUI.DefaultHiddenElementCSS;

  var _a = react.exports.useReducer(reducer, {
    status: !mobileNavStartsHidden ? _MobileNavigationState.show : _MobileNavigationState.hide
  }),
      state = _a[0],
      dispatch = _a[1];

  var show = state.status === _MobileNavigationState.show;
  var appliedCSSClassName = className || TridentProfessionaServicesUI.DefaultNavigationCSSClass;

  var showNavClick = function () {
    return dispatch(_MobileNavigationState.show);
  };

  var hideNavClick = function () {
    return dispatch(_MobileNavigationState.hide);
  };

  var mobileNavCSSModifier = show ? TridentProfessionaServicesUI.DefaultMobileShowCSSClass : TridentProfessionaServicesUI.DefaultMobileHideCSSClass;
  var mobileShowButtonClassName = mobileShowNavButtonClassName || TridentProfessionaServicesUI.DefaultMobileButtonShowCSSClass;
  var mobileHideButtonClassName = mobileHideNavButtonClassName || TridentProfessionaServicesUI.DefaultMobileButtonHideCSSClass;
  return jsxRuntime.exports.jsxs("div", __assign({
    className: appliedCSSClassName + " " + mobileNavCSSModifier
  }, {
    children: [jsxRuntime.exports.jsx("nav", __assign({
      className: show ? navClassName : hiddenElementCSSClass
    }, {
      children: jsxRuntime.exports.jsx(UnorderedListLinks, {
        className: ulClassName,
        linksClassName: liClassName,
        links: navigationLinks
      }, void 0)
    }), void 0), jsxRuntime.exports.jsxs("footer", __assign({
      className: mobileButtonWrapperCSSClassName
    }, {
      children: [jsxRuntime.exports.jsx("div", __assign({
        className: show ? mobileHideButtonClassName : hiddenElementCSSClass,
        onClick: hideNavClick
      }, {
        children: mobileHideNavButtonElement
      }), void 0), jsxRuntime.exports.jsx("div", __assign({
        className: !show ? mobileShowButtonClassName : hiddenElementCSSClass,
        onClick: showNavClick
      }, {
        children: mobileShowNavButtonElement
      }), void 0)]
    }), void 0)]
  }), void 0);
};

export { Navigation };
//# sourceMappingURL=navigation.js.map
