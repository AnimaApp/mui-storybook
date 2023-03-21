import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {iconOptions, iconTransform} from "../utils";
import Icon from '@mui/material/Icon';

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    badgeContent: { type: "number" },
    max: { type: "number" },
    variant : {
      control: {
        type: "select",
        options: ["dot", "standard"],
      }
    },
    overlap : {
      control: {
        type: "select",
        options: ["circular", "rectangular"],
      }
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "error", "info", "success", "warning"],
      }
    },
    vertical: {
      control: {
        type: "select",
        options: ["top", "bottom"],
      }
    },
    horizontal: {
      control: {
        type: "select",
        options: ["left", "right"],
      }
    },
    colorMail: {
      control: {
        type: "select",
        options: ["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"],
      }
    },
    showZero: { type: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <Badge
      {...args}
      anchorOrigin={{
        vertical: args.vertical,
        horizontal: args.horizontal,
      }}
    >
      <MailIcon color={args.colorMail}/>
    </Badge>
  );
};

Default.args = {
  badgeContent: 4,
  max: 5,
  variant: "standard",
  overlap: "rectangular",
  color: "default",
  vertical: "top",
  horizontal: "right",
  colorMail: "inherit",
  showZero: false
};