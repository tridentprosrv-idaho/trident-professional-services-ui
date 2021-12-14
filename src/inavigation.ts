import { ReactNode } from "react";

import { IHyperLink } from "./IHyperLink";
export interface INavigation {
    className?: string;
    hiddenElementCSS?: string;
    liClassName?: string;
    mobileHideNavButtonClassName?: string;
    mobileHideNavButtonElement:ReactNode;
    mobileShowNavButtonClassName?: string;
    mobileShowNavButtonElement: ReactNode;
    mobileButtonWrapperCSSClassName?: string;
    mobileNavStartsHidden?: boolean;
    navClassName?:string;
    navigationLinks: IHyperLink[];
    ulClassName?: string; // unordered list class
}