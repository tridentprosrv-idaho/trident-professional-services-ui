import React from "react";
import { IUnorderedListLinks } from "./IUnorderedListLinks";
export const UnorderedListLinks = (props: IUnorderedListLinks) => {
  const { className, links, linksClassName } = props;
  return (
    <ul className={className}>
      {(links ? links : []).map((link, index, array) => (
        <li className={linksClassName} key={"trident-ul-"+index}>
          <a href={link.url} title={link.text}>
            {link.icon}
            {link.icon ? "\u00a0" : ""}
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
