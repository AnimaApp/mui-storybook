import * as React from 'react';
import TextField from '@mui/material/TextField';

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    label:{
      type: "string",
      defaultValue: "TextField"
    },
    defaultValue:{
      type: "string",
      defaultValue: "Text Field"
    },
    helperText:{
      type: "string",
      defaultValue: "Helper Text"
    },
    placeholder:{
      type: "string",
      defaultValue: "Placeholder"
    },
    variant: {
      type: "select",
      options: ["outlined", "filled", "standard"],
      defaultValue: "outlined"
    },
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
    type: {
      type: "select",
      options: ["default", "number", "search", "password", "file", "color", "date", "time"],
      defaultValue: "outlined"
    },
    width: { description: "Width", type: "number", defaultValue: 300 },
    required: {type: "boolean", defaultValue: false},
    disabled: {type: "boolean", defaultValue: false},
    readOnly: {type: "boolean", defaultValue: false},
    shrink: {type: "boolean", defaultValue: false},
    error: {type: "boolean", defaultValue: false},
  }
};

export const Story = (args) => {
  return (
    <TextField
      {...args}
      sx={{ width: args.width }}
      InputProps={{
        readOnly: args.readOnly,
        shrink: args.shrink,
      }}
    />
  )
}