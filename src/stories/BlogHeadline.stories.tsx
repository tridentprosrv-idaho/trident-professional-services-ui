import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogHeadline } from '../blogheadline';
import EarthImg from './assets/ISS-40_Blue_and_white_part_of_Earth.jpg'

export default {
    title: 'Example/Blog Headline',
    component: BlogHeadline
} as ComponentMeta<typeof BlogHeadline>;

const Template: ComponentStory<typeof BlogHeadline> = (args) => <BlogHeadline {...args} />;

export const SampleBlogHeadline = Template.bind({ });
SampleBlogHeadline.args ={
    blogPostHeadline : "Sample Blog Post Headline", 
    blogPostSummary: "This is a blog post summary...", 
    blogPostImageUrl: EarthImg
};