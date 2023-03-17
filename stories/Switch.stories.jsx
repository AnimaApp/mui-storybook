import * as React from 'react';
import Switch from '@mui/material/Switch';

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium"],
      defaultValue: "medium",
    },
    color: {
      type: "select",
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      defaultValue: 'primary'
    },
    defaultChecked: {type: "boolean", defaultValue: true},
    disabled: {type: "boolean", defaultValue: false},
  }
};

export const Story = (args) => {
  return (
    <Switch {...args}/>
  )
}