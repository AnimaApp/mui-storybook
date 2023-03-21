import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    label: { type: "string" },
    variant: {
      control: {
        type: "select",
        options: ["filled", "outlined"],
      }
    },
    size: {
      control: {
        type: "select",
        options: ["medium", "small"],
      }
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "error", "info", "success", "warning"],
      }
    },
    disabled: { type: "boolean" },
    onClick: { type: "boolean" },
    onDelete: { type: "boolean" },
    icon: { type: "boolean" },
    iconName: {
      control: {
        type: "select",
        options: iconOptions,
        description: "Icon",
        transform: iconTransform,
        required: false,
      },
    },
    avatar: { type: "boolean" },
    avatarText: { type: "text" },
    srcAvatar: { type: "text" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <Chip
      {...args}
      icon={args.icon && args.iconName}
      avatar={args.avatar &&
      <Avatar src={args.srcAvatar}>
        {args.avatarText}
      </Avatar>}
    />
  )
}

Default.args = {
  label: "Chip",
  variant: "outlined",
  size: "medium",
  color: "default",
  icon: false,
  iconName: "RestoreIcon",
  avatar: false,
  avatarText: "T",
  srcAvatar: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  disabled: false,
  onClick: false,
  onDelete: false
};