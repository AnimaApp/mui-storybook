import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

export default {
  component: Slider,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Button",
    },
    value: {
      type: "select",
      options: [0, 25, 50, 80, 100],
      defaultValue: 0,
    },
    color: {
      type: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
      defaultValue: "primary",
    },
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    handleChange: {
      action: "handleChange",
    },
  },
};

const Template = ({ title, ...args }) => {
  return (
    <Box sx={{ width: 200 }}>
      <Typography component="legend">{title}</Typography>
      <Slider {...args} />
    </Box>
  );
};

export const SliderComponent = Template.bind({});

SliderComponent.args = {
  title: "Slider",
  size: "medium",
  value: 0,
};
