import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navigation } from "../navigation";

export default {
  title: "Example/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const SampleNavigation = Template.bind({});
SampleNavigation.args = {
  mobileHideNavButtonElement:<button>Hide</button>,
  mobileShowNavButtonElement:<button>Show</button>, 
  navigationLinks: [
    { text: "Home", url: "https://whoisidaho.com/" },
    { text: "Products", url: "https://whoisidaho.com/" },
    { text: "About", url: "https://whoisidaho.com/" },
    { text: "Book", url: "https://whoisidaho.com/" },
  ],
};