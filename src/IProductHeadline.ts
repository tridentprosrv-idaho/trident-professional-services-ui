export interface IProductHeadline {
  className?: string;
  pageHeadline?: string; // Optional H1 tag element
  productHeadline?: string; // if this is not the first product headline component in use this must be non null
  headlineClassName?: string;
  subText: string;
  callToAction?: string;
  callToActionLink?: string;
  callToActionFunc?: () => void;
  callToActionClassName?: string;
  productImg?: string;
  showImageOnMobile?: boolean;
  mobileWidth?: number;
}
