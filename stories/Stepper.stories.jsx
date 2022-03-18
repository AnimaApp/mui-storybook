import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default {
  component: Stepper,
  argTypes: {
    steps: {
      type: "select",
      options: [2, 3, 4, 5],
      defaultValue: 2,
    },
    activeStep: {
      type: "select",
      options: [2, 3, 4, 5],
    },
    useAlternativelabel: {
        type: 'boolean',
        defaultValue: false
    }
  },
};

const Template = ({ useAlternativelabel, steps, ...args }) => {
  const altenativeLabels = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  return (
    <Box>
      <Stepper {...args}>
        {useAlternativelabel
          ? altenativeLabels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))
          : [...Array(steps).keys()].map((label) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
      </Stepper>
    </Box>
  );
};

export const StepperComponent = Template.bind({});

StepperComponent.args = {
  steps: 2,
  activeStep: 2,
};
