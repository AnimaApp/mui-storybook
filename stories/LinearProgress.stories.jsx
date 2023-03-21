import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default {
  title: "LinearProgress",
  component: LinearProgress,
  argTypes: {
    width: { description: "Width", type: "number" },
    color: {
      control: {
        type: "select",
        options: ["inherit", "primary", "secondary", "error", "info", "success", "warning"],
      }
    },
    variant: {
      control: {
        type: "select",
        options: ["buffer", "indeterminate", "determinate", "query"],
      }
    },
    value: { type: "number" },
    valueBuffer: { type: "number" },
    size: { type: "number" },
    borderRadius: { type: "number" },
  }
};

export const Default = (args) => {
  return (
    <LinearProgress
      {...args}
      sx={{
        width: args.width,
        height: args.size,
        borderRadius: args.borderRadius
      }}
    />
  )
};

Default.args = {
  width: 500,
  color: "primary",
  variant: "indeterminate",
  value: 10,
  valueBuffer: 20,
  size: 5,
  borderRadius: 2
};