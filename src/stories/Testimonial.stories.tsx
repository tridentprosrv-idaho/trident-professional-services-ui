import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Testimonial } from '../testimonial';
import avatar from "./assets/Kimberly-Barnes.jpeg"

export default {
    title: 'Example/Testimonial',
    component: Testimonial
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => <Testimonial {...args} />;

export const ImageTestimonial = Template.bind({ });
ImageTestimonial.args ={
  testimonialAvatarImg:avatar,
  testimonialName:'Kim B.',
  testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, enim non molestie volutpat, urna nunc tempor erat, aliquam vulputate metus sapien nec felis. Sed et condimentum lacus, quis viverra est. Maecenas tincidunt ligula vitae commodo luctus. Sed sollicitudin ornare mi, ac tincidunt neque accumsan nec. Suspendisse aliquet velit vitae enim convallis, eu tempor odio dapibus. Etiam eu nulla sollicitudin, blandit lectus eu, viverra velit. Ut eu sem ut dolor feugiat bibendum. Quisque nec arcu in augue sagittis auctor. Nulla eleifend porta quam convallis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

export const NoImageTestimonial = Template.bind({ });
NoImageTestimonial.args ={
  testimonialName:'Chidi U.',
  testimonial: 'Nulla auctor aliquam ligula sed volutpat. Proin iaculis tristique rhoncus. Morbi tincidunt velit non felis fringilla faucibus. Nullam ac dui quam. Suspendisse non maximus erat. Aenean sagittis hendrerit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas egestas posuere est non porta. Proin bibendum vel massa sit amet auctor. Nam id velit turpis. Nulla mattis ultrices porttitor. Etiam pulvinar dolor eu enim volutpat efficitur. Nullam tellus risus, tempor nec fermentum blandit, dictum vitae mi. Sed auctor efficitur odio, eu egestas ipsum feugiat lobortis.'
};