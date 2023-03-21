import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      }
    },
    color: {
      control: {
        type: "select",
        options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      }
    },
    disabled: { type: "boolean" },
  }
};

export const Default = (args) => {
  return (
    <Checkbox
      {...args}
    />
  )
};

Default.args = {
  size: "medium",
  color: "primary",
  disabled: false
};