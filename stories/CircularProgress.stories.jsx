import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default {
  title: "CircularProgress",
  component: CircularProgress,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["inherit", "primary", "secondary", "error", "info", "success", "warning"],
      }
    },
    variant: {
      control: {
        type: "select",
        options: ["determinate", "indeterminate"],
      }
    },
    disableShrink: { type: "boolean" },
    size: { type: "number" },
    thickness: { type: "number" },
    value: { type: "number" },
  }
};

export const Default = (args) => {
  return (
    <CircularProgress {...args}/>
  )
};

Default.args = {
  color: "primary",
  variant: "indeterminate",
  size: 40,
  thickness: 3.6,
  value: 10,
  disableShrink: false
};