import React from "react";

import { IFooter } from "./IFooter";
import { UnorderedListLinks } from "./UnorderedListLinks";
export const Footer = (props: IFooter) => {
  const {
    className,
    copyrightClassName,
    copyrightGroupClassName,
    title,
    titleClassName,
    year,
    siteMapClassName,
    siteMapGroupClassName,
    siteMapTitleText,
    siteMapLinks,
    siteMapLinkClassName,
    siteMapListClassName,
    socialClassName,
    socialGroupClassName,
    socialTitleText,
    socialLinks,
    socialListClassName,
    socialLinkClassName,
  } = props;
  const copyrightYear: number = year || new Date().getFullYear();
  return (
    <footer className={className}>
      <div className={copyrightGroupClassName}>
        <span className={titleClassName}>{title}</span>
        <span className={copyrightClassName}>&copy; {copyrightYear}</span>
      </div>
      <div className={siteMapGroupClassName}>
        <span className={siteMapClassName}>{siteMapTitleText}</span>
        <UnorderedListLinks
          className={siteMapListClassName}
          links={siteMapLinks}
          linksClassName={siteMapLinkClassName}
        />
      </div>
      <div className={socialGroupClassName}>
        <span className={socialClassName}>{socialTitleText}</span>
        <UnorderedListLinks
          className={socialListClassName}
          links={socialLinks}
          linksClassName={socialLinkClassName}
        />
      </div>
    </footer>
  );
};
