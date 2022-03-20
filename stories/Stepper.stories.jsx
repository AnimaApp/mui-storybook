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
    alternativeLabel: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template = ({ alternativeLabel, steps, ...args }) => {
  const altenativeLabels = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
    "Preview your ad",
    "Save",
  ];
  return (
    <Box>
      {alternativeLabel ? (
        <Stepper {...args} alternativeLabel>
          {altenativeLabels.splice(0, steps).map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      ) : (
        <Stepper {...args}>
          {[...Array(steps).keys()].map((label) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      )}
    </Box>
  );
};

export const StepperComponent = Template.bind({});

StepperComponent.args = {
  steps: 2,
  activeStep: 2,
};
