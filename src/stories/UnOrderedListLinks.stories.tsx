import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnorderedListLinks } from '../UnorderedListLinks'; 

export default {
    title: 'Example/UnorderedListLinks',
    component: UnorderedListLinks
} as ComponentMeta<typeof UnorderedListLinks>;

const Template: ComponentStory<typeof UnorderedListLinks> = (args) => <UnorderedListLinks {...args} />;

export const SampleUnorderedListLinks = Template.bind({ });
SampleUnorderedListLinks.args ={
    links : [
        { text:'Who Is Idaho', url:'https://whoisidaho.com/'},
        { icon:<img src="https://lh3.googleusercontent.com/0cDOOJjp8pUGDDFLqHFITEi35uMGZ5wHpZ9KTKridxk71kpR9MfeydpQqG5n8Mvetvkg5iVuZGeL2xMvxgBY_UL-T9p0x_Eo4EAh" style={{maxHeight:'12.5px'}} alt="Chrome"></img>, text:'Chrome', url:'https://google.com/'},
        { icon:<img src="https://compass-ssl.xbox.com/assets/16/9a/169a7ffe-c2c7-463a-a77c-21239c9ac388.jpg?n=Xbox_Sharing_Xbox-2019-White-on-Green_200x200.jpg" style={{maxHeight:'12.5px'}} alt="XBOX logo" />, text:'xbox', url:'https://xbox.com/'},
        { icon: <img src="https://www.nike.com/android-icon-192x192.png" style={{maxHeight:'12.5px'}} alt="Nike" />, url:"https://nike.com" }
        
    ]
    
};