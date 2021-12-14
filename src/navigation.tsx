import { useReducer } from "react";
import { INavigation } from "./inavigation";
import "./navigation.css";
import { TridentProfessionaServicesUI } from "./TridentProfessionaServicesUISettings";
import { UnorderedListLinks } from "./UnorderedListLinks";

enum _MobileNavigationState {
  show,
  hide,
}
interface IMobileNavigationState {
  status: _MobileNavigationState;
}
const reducer = (
  state: IMobileNavigationState,
  action: _MobileNavigationState
) => {
  switch (action) {
    case _MobileNavigationState.hide:
      return { status: _MobileNavigationState.hide };
    case _MobileNavigationState.show:
      return { status: _MobileNavigationState.show };
    default:
      return state;
  }
};

export const Navigation = (props: INavigation) => {
  const {
    className,
    hiddenElementCSS,
    liClassName,
    mobileHideNavButtonClassName,
    mobileHideNavButtonElement,
    mobileShowNavButtonClassName,
    mobileShowNavButtonElement,
    mobileButtonWrapperCSSClassName,
    mobileNavStartsHidden,
    navClassName,
    navigationLinks,
    ulClassName,
  } = props;

  const hiddenElementCSSClass =
    hiddenElementCSS || TridentProfessionaServicesUI.DefaultHiddenElementCSS;
  const [state, dispatch] = useReducer(reducer, {
    status: !mobileNavStartsHidden ? _MobileNavigationState.show: _MobileNavigationState.hide,
  });
  const show = state.status === _MobileNavigationState.show;
  const appliedCSSClassName =
    className || TridentProfessionaServicesUI.DefaultNavigationCSSClass;
  const showNavClick = () => dispatch(_MobileNavigationState.show);
  const hideNavClick = () => dispatch(_MobileNavigationState.hide);
  const mobileNavCSSModifier = show ? TridentProfessionaServicesUI.DefaultMobileShowCSSClass : TridentProfessionaServicesUI.DefaultMobileHideCSSClass;
  const mobileShowButtonClassName = mobileShowNavButtonClassName || TridentProfessionaServicesUI.DefaultMobileButtonShowCSSClass;
  const mobileHideButtonClassName = mobileHideNavButtonClassName || TridentProfessionaServicesUI.DefaultMobileButtonHideCSSClass;
  return (
    <div className={ appliedCSSClassName + " " + mobileNavCSSModifier }>
      <nav className={show ? navClassName : hiddenElementCSSClass}>
        <UnorderedListLinks
          className={ulClassName}
          linksClassName={liClassName}
          links={navigationLinks}
        />
      </nav>
      <footer className={mobileButtonWrapperCSSClassName}>
        <div
          className={
            show ? mobileHideButtonClassName : hiddenElementCSSClass
          }
          onClick={hideNavClick}
        >
          {mobileHideNavButtonElement}
        </div>
        <div
          className={
            !show ? mobileShowButtonClassName : hiddenElementCSSClass
          }
          onClick={showNavClick}
        >
          {mobileShowNavButtonElement}
        </div>
      </footer>
    </div>
  );
};
