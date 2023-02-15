import React from 'react';
import Card from './Card';

export default {
  title: 'Application/Component Library/Card',
  component: Card,
  argTypes: {
    color: { control: 'text' },
  },
  // controls: {
  //   hideNoControlsWarning: true,
  // },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'black',
};

export const Purple = Template.bind({});
Purple.args = {
  color: 'purple',
};
export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
};
