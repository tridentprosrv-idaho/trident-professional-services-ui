import React from "react";
import { IBlogHeadlineProps } from "./IBlogHeadlineProps";
import { TridentProfessionaServicesUI } from "./TridentProfessionaServicesUISettings";
import "./responsive-img.css";
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
    <article className={className}>
      <header className={blogPostHeadlineContainerClassName}>
        <h2 className={blogPostHeadlineClassName}>{blogPostHeadline}</h2>
      </header>
      <figure>
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
        <figcaption>{blogPostSummary}</figcaption>
      </figure>
    </article>
  );
};
