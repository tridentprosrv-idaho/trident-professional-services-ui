import { IHyperLink } from "./IHyperLink";
export interface IFooter {
  className?: string;
  copyrightClassName?: string;
  copyrightGroupClassName?: string;
  title: string;
  titleClassName?: string;
  year?: number;
  siteMapClassName?: string;
  siteMapGroupClassName?: string;
  siteMapTitleText?: string;
  siteMapListClassName?: string;
  siteMapLinks?: IHyperLink[];
  siteMapLinkClassName?: string;
  socialClassName?: string;
  socialGroupClassName?: string;
  socialTitleText?: string;
  socialListClassName?: string;
  socialLinks?: IHyperLink[];
  socialLinkClassName?: string;
}
