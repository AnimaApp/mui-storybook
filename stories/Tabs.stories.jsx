import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default {
  component: Tabs,
  argTypes: {
    textColor: {
      type: "select",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    indicatorColor: {
      type: "select",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    value: {
      type: "select",
      options: [1, 2, 3, 4, 5],
      defaultValue: 1,
    },
    numberOfTabs: {
      type: "select",
      options: [2, 3, 4, 5],
      defaultValue: 2,
    },
  },
};

const Template = ({ numberOfTabs, ...args }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs {...args}>
        {[...Array(numberOfTabs).keys()].map((n, index) => (
          <Tab value={index + 1} label={"Item " + (index + 1)} />
        ))}
      </Tabs>
    </Box>
  );
};

export const TabsComponent = Template.bind({});

TabsComponent.args = {
    indicatorColor: "primary",
    textColor: "primary"
};
