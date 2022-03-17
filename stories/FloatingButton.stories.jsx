import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";

export default {
  component: Fab,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Button",
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
    variant: {
      type: "select",
      options: ["None", "extended"],
      defaultValue: "None",
    },
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: {
        type: "boolean",
        defaultValue: false,
    }
  },
};

const Template = ({ title, isExtended, ...args }) => {
  console.log({ title, isExtended, ...args });
  return (
    <Box>
      <Fab {...args}>
        {args.variant === "extended" ? (
          <>
            <NavigationIcon sx={{ mr: 1 }} />
            {title}
          </>
        ) : (
          <>
            <AddIcon />
          </>
        )}
      </Fab>
    </Box>
  );
};

export const FabButton = Template.bind({});

FabButton.args = {
  title: "Button",
  color: "primary",
  size: "large",
  variant: "contained",
};
