import React from "react";
import Button from "@mui/material/Button";
import { Delete, Send } from "@mui/icons-material";

export default {
  component: Button,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Button"
    },
    color: {
      type: "select",
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      defaultValue: 'primary'
    },
    variant: {
      type: "select",
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained'
    },
    size: {
      type: "select",
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium'
    },
    startIcon: {
      type: "select",
      options: ['None', 'Send'],
      mapping: {
        None: null,
        Send: <Send />
      },
      defaultValue: 'None'
    },
    endIcon: {
      type: "select",
      options: ['None', 'Delete'],
      mapping: {
        None: null,
        Delete: <Delete />
      },
      defaultValue: 'None'
    },
  },
};

export const Story = (args) => {
  const {title, ...other} = args
  return (
    <Button {...other}>{title}</Button>
  );
};

Story.args = {
  title: "Button",
  color: "primary",
  size: "large",
  variant: "contained",
}