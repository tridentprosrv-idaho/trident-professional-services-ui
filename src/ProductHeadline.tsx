import React from "react";
import { IProductHeadline } from "./IProductHeadline";
import "./product-headline.css";
import "./link-button.css";
import { TridentProfessionaServicesUI } from "./TridentProfessionaServicesUISettings";

export const ProductHeadline = (props: IProductHeadline) => {
  const {
    className,
    pageHeadline,
    productHeadline,
    headlineClassName,
    subText,
    callToAction,
    callToActionLink,
    callToActionFunc,
    callToActionClassName,
    productImg,
    showImageOnMobile,
    mobileWidth,
  } = props;
  const maxMobileWidth =
    mobileWidth || TridentProfessionaServicesUI.DefaultMobileWidth;
  const isMobile = window.innerWidth < maxMobileWidth;
  return (
    <article
      style={
        !isMobile || showImageOnMobile
          ? { backgroundImage: "url(" + productImg + ")" }
          : undefined
      }
      className={
        className || TridentProfessionaServicesUI.DefaultProductHeadlineCSSClass
      }
    >
      {pageHeadline ? (
        <h1 className={headlineClassName}>{pageHeadline}</h1>
      ) : undefined}
      {productHeadline ? (
        <h2 className={headlineClassName}>{productHeadline}</h2>
      ) : undefined}
      <p>{subText}</p>
      {callToAction ? (
        <a
          className={
            callToActionClassName ||
            TridentProfessionaServicesUI.DefaultLinkButtonCSSClass
          }
          href={callToActionLink}
          onClick={callToActionFunc}
        >
          {callToAction}
        </a>
      ) : undefined}
    </article>
  );
};
