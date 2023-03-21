import * as React from 'react';
import TextField from '@mui/material/TextField';

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    label: { type: "string" },
    defaultValue: { type: "string" },
    helperText: { type: "string" },
    placeholder: { type: "string" },
    variant: {
      control: {
        type: "select",
        options: ["outlined", "filled", "standard"],
      }
    },
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
    type: {
      control: {
        type: "select",
        options: ["default", "number", "search", "password", "file", "color", "date", "time"],
      }
    },
    width: { description: "Width", type: "number" },
    required: { type: "boolean" },
    disabled: { type: "boolean" },
    readOnly: { type: "boolean" },
    shrink: { type: "boolean" },
    error: { type: "boolean" },
  }
};

export const Default = (args) => {
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
};

Default.args = {
  label: "TextField",
  defaultValue: "Text Field",
  helperText: "Helper Text",
  placeholder: "Placeholder",
  variant: "outlined",
  size: "medium",
  color: "primary",
  type: "outlined",
  width: 300,
  required: false,
  disabled: false,
  readOnly: false,
  shrink: false,
  error: false
};