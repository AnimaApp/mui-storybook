import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default {
  component: ButtonGroup,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Button",
    },
    numberOfChildren: {
      type: "select",
      options: [2,3,4,5],
      defaultValue: 2,
    },
    variant: {
      type: "select",
      options: ["contained", "outlined", "text"],
      defaultValue: "contained",
    },
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
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
    orientation: {
      type: "select",
      options: ["vertical", "horizontal"],
    },
    splitButton: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

export const Story = ({ numberOfChildren, title, splitButton, ...args }) => {
  return (
    <ButtonGroup {...args}>
      {splitButton ? (
        <>
          <Button>{title}</Button>
          <Button size="small" >
            <ArrowDropDownIcon />
          </Button>
        </>
      ) : (
        [...Array(numberOfChildren).keys()].map((n) => <Button>{title}</Button>)
      )}
    </ButtonGroup>
  );
};

Story.args = {
  title: "Button",
  color: "primary",
  size: "large",
  variant: "contained",
};
