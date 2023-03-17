import * as React from "react";
import Avatar from '@mui/material/Avatar';

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: { description: "Size", type: "number", defaultValue: 50 },
    src: { description: "src", type: "string", defaultValue: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" },
    alt: { description: "src", type: "string", defaultValue: "Hello" },
    variant: {
      type: "select",
      options: ["circular", "rounded", "square"],
      defaultValue: "circular"
    }
  },
};

export const Story = (args) => {
  return (
    <Avatar
      {...args}
      sx={{
        width: args.size,
        height: args.size,
      }}
    />
  )
}