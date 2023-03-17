import * as React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    text: {
      type: "string",
      defaultValue: "Alert string"
    },
    title: {
      type: "string",
      defaultValue: "Alert"
    },
    width: { description: "Width", type: "number", defaultValue: 500 },
    severity: {
      type: "select",
      options: ["error", "warning", "info", "success"]
    },
    variant: {
      type: "select",
      options: ["standard", "filled", "outlined"],
    },
    color: {
      type: "select",
      options: ['info', 'success', 'warning', "error"],
      defaultValue: 'primary'
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    close: {type: "boolean", defaultValue: false},
  },
  decorators: [withIconMapped],
};

export const Story = (args) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Alert
      {...args}
      icon={args.iconName}
      sx={{ width: args.width }}
      action={
        args.close && <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      <AlertTitle>{args.title}</AlertTitle>
      {args.text}
    </Alert>
  )
}