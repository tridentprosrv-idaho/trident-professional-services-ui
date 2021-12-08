import React from "react";
import { ITestimonial } from "./ITestimonial";
import "./responsive-img.css";
import { TridentProfessionaServicesUI } from "./TridentProfessionaServicesUISettings";

export const Testimonial = (props: ITestimonial) => {
  const {
    className,
    testimonialAvatarImg,
    testimonialAvatarClass,
    testimonialName,
    testimonialNameClass,
    testimonial,
    testimonialClassName,
  } = props;
  return (
    <article className={className}>
      {testimonialAvatarImg ? (
        <figure>
          <div
            style={{ backgroundImage: "url(" + testimonialAvatarImg + ")" }}
            className={
              testimonialAvatarClass ||
              TridentProfessionaServicesUI.DefaultResponsiveImageCSSClass
            }
          />
          <figcaption className={testimonialNameClass}>{testimonialName}</figcaption>
        </figure>
      ) : (
        <h3 className={testimonialNameClass}>{testimonialName}</h3>
      )}
      <p className={testimonialClassName}>{testimonial}</p>
    </article>
  );
};
