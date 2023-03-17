import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {iconOptions, iconTransform} from "../utils";
import Icon from '@mui/material/Icon';

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    badgeContent: {
      type: "number",
      defaultValue: 4,
    },
    max: {
      type: "number",
      defaultValue: 5,
    },
    variant : {
      type: "select",
      options: ["dot", "standard"],
      defaultValue: "standard",
    },
    overlap : {
      type: "select",
      options: ["circular", "rectangular"],
      defaultValue: "rectangular",
    },
    color: {
      type: "select",
      options: ["default", "primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "default",
    },
    vertical: {
      type: "select",
      options: ["top", "bottom"],
      defaultValue: "top",
    },
    horizontal: {
      type: "select",
      options: ["left", "right"],
      defaultValue: "right",
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    colorMail: {
      type: "select",
      options: ["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "inherit",
    },
    showZero: {type: "boolean", defaultValue: false},
  },
};

export const Mail = (args) => {
  return (
    <Badge
      {...args}
      anchorOrigin={{
        vertical: args.vertical,
        horizontal: args.horizontal,
      }}
    >
      <MailIcon color={args.colorMail}/>
      {/*<svg data-testid={args.iconName}></svg>*/}
    </Badge>
  );
};