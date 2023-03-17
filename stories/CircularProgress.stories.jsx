import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default {
  title: "CircularProgress",
  component: CircularProgress,
  argTypes: {
    color: {
      type: "select",
      options: ["inherit", "primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "primary",
    },
    variant: {
      type: "select",
      options: ["determinate", "indeterminate"],
      defaultValue: "indeterminate",
    },
    disableShrink: {type: "boolean", defaultValue: false},
    size: {type: "number", defaultValue: 40},
    thickness: {type: "number", defaultValue: 3.6},
    value: {type: "number", defaultValue: 10},
  }
};

export const Story = (args) => {
  return (
    <CircularProgress {...args}/>
  )
};