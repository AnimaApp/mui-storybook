import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default {
  title: "LinearProgress",
  component: LinearProgress,
  argTypes: {
    width: { description: "Width", type: "number", defaultValue: 500 },
    color: {
      type: "select",
      options: ["inherit", "primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "primary",
    },
    variant: {
      type: "select",
      options: ["buffer", "indeterminate", "determinate", "query"],
      defaultValue: "indeterminate",
    },
    value: {type: "number", defaultValue: 10},
    valueBuffer: {type: "number", defaultValue: 20},
    size: {type: "number", defaultValue: 5},
    borderRadius: {type: "number", defaultValue: 2},
  }
};

export const Story = (args) => {
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