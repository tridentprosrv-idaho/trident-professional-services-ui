import React from "react";

import { IBlogHeadlineProps } from "./IBlogHeadlineProps";
import { TridentProfessionaServicesUI } from "./TridentProfessionaServicesUISettings";
import "./blogheadline.css";
export const BlogHeadline = (props: IBlogHeadlineProps) => {
  const {
    className,
    blogPostHeadline,
    blogPostImageUrl,
    blogPostSummary,
    blogImageStyleClass,
    blogPostHeadlineClassName,
    blogPostHeadlineContainerClassName,
  } = props;
  return (
    <section className={className}>
      <div className={blogPostHeadlineContainerClassName}>
        <h2 className={blogPostHeadlineClassName}>{blogPostHeadline}</h2>
      </div>
      <div
        style={{
          backgroundImage: blogPostImageUrl
            ? "url(" + blogPostImageUrl + ")"
            : undefined,
        }}
        className={
          blogImageStyleClass ||
          TridentProfessionaServicesUI.DefaultResponsiveImageCSSClass
        }
      />
      <p>{blogPostSummary}</p>
    </section>
  );
};
