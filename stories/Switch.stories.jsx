import * as React from 'react';
import Switch from '@mui/material/Switch';

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      },
    },
    defaultChecked: { type: "boolean" },
    disabled: { type: "boolean" },
  }
};

export const Default = (args) => {
  return (
    <Switch {...args}/>
  )
}

Default.args = {
  size: "medium",
  color: "primary",
  defaultChecked: true,
  disabled: true
}