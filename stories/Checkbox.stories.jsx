import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default {
  title: "Checkbox",
  component: Checkbox,
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
    disabled: { type: "boolean", defaultValue: false},
  }
};

export const Story = (args) => {
  return (
    <Checkbox
      {...args}
    />
  )
}