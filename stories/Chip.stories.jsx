import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    label: { type: "string", defaultValue: "Chip"},
    variant: {
      type: "select",
      options: ["filled", "outlined"]
    },
    size: {
      type: "select",
      options: ["medium", "small"],
      defaultValue: "medium",
    },
    color: {
      type: "select",
      options: ["default", "primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "default",
    },
    disabled: {type: "boolean", defaultValue: false},
    onClick: {type: "boolean", defaultValue: false},
    onDelete: {type: "boolean", defaultValue: false},
    icon: {type: "boolean", defaultValue: false},
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    avatar: {type: "boolean", defaultValue: false},
    avatarText: {type: "text", defaultValue: "C"},
    srcAvatar: {type: "text", defaultValue: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"},
  },
  decorators: [withIconMapped],
};

export const Story = (args) => {
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