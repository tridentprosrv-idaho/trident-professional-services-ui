import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductHeadline } from '../ProductHeadline';
import bkg from "./assets/vidar-nordli-mathisen-zqgOkt7sQlY-unsplash-1024x683.jpg"

export default {
    title: 'Example/ProductHeadline',
    component: ProductHeadline
} as ComponentMeta<typeof ProductHeadline>;

const Template: ComponentStory<typeof ProductHeadline> = (args) => <ProductHeadline {...args} />;

export const ImageProductHeadline = Template.bind({ });
ImageProductHeadline.args ={
  pageHeadline:"This should be a H1",
  subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, enim non molestie volutpat, urna nunc tempor erat, aliquam vulputate metus sapien nec felis. Sed et condimentum lacus, quis viverra est. Maecenas tincidunt ligula vitae commodo luctus. Sed sollicitudin ornare mi, ac tincidunt neque accumsan nec. Suspendisse aliquet velit vitae enim convallis, eu tempor odio dapibus. Etiam eu nulla sollicitudin, blandit lectus eu, viverra velit. Ut eu sem ut dolor feugiat bibendum. Quisque nec arcu in augue sagittis auctor. Nulla eleifend porta quam convallis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  callToAction: "Call To Action",
  callToActionLink: "https://www.tridentprofessionalservices.com/",
  productImg: bkg,
  showImageOnMobile: false
};

export const AgitationHeadline = Template.bind({ });
AgitationHeadline.args ={
  productHeadline:"This should be a H2",
  subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, enim non molestie volutpat, urna nunc tempor erat, aliquam vulputate metus sapien nec felis. Sed et condimentum lacus, quis viverra est. Maecenas tincidunt ligula vitae commodo luctus. Sed sollicitudin ornare mi, ac tincidunt neque accumsan nec. Suspendisse aliquet velit vitae enim convallis, eu tempor odio dapibus. Etiam eu nulla sollicitudin, blandit lectus eu, viverra velit. Ut eu sem ut dolor feugiat bibendum. Quisque nec arcu in augue sagittis auctor. Nulla eleifend porta quam convallis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  
};

export const BasicProductHeadline = Template.bind({ });
BasicProductHeadline.args ={
  productHeadline:"This should be a H2",
  subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, enim non molestie volutpat, urna nunc tempor erat, aliquam vulputate metus sapien nec felis. Sed et condimentum lacus, quis viverra est. Maecenas tincidunt ligula vitae commodo luctus. Sed sollicitudin ornare mi, ac tincidunt neque accumsan nec. Suspendisse aliquet velit vitae enim convallis, eu tempor odio dapibus. Etiam eu nulla sollicitudin, blandit lectus eu, viverra velit. Ut eu sem ut dolor feugiat bibendum. Quisque nec arcu in augue sagittis auctor. Nulla eleifend porta quam convallis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  callToAction: "Call To Action",
  callToActionLink: "https://www.tridentprofessionalservices.com/"
};