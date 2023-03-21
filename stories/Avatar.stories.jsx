import * as React from "react";
import Avatar from '@mui/material/Avatar';

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: { description: "Size", type: "number" },
    src: { description: "src", type: "string" },
    alt: { description: "src", type: "string" },
    variant: {
      control: {
        type: "select",
        options: ["circular", "rounded", "square"],
      }
    }
  },
};

export const Default = (args) => {
  return (
    <Avatar
      {...args}
      sx={{
        width: args.size,
        height: args.size,
      }}
    />
  )
};

Default.args = {
  size: 50,
  src: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  alt: "Avatar",
  variant: "circular"
};