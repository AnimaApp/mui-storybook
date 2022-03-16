import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { Delete, Send } from "@mui/icons-material";

export default {
  title: "LoadingButton",
  component: LoadingButton,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Button"
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
    loadingPosition: {
      type: "select",
      options: ['start', 'center', 'end'],
      defaultValue: 'None'
    },
  },
};

export const Story = (args) => {
  const {title, ...other} = args
  return (
    <LoadingButton  
      {...other}
      loading
      startIcon={other.loadingPosition == "start" && <Send />}
      endIcon={other.loadingPosition == "end" && <Send />}
    >
      {title}
    </LoadingButton>
  );
};