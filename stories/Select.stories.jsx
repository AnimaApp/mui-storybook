import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default {
  component: Select,
  argTypes: {
    label: {
      type: "string",
      defaultValue: "Select",
    },
    placeholderText: {
      type: "string",
      defaultValue: "Placeholder Text",
    },
    variant: {
      type: "select",
      options: ["None", "standard", "filled"],
      defaultValue: "None",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    error: {
      type: "boolean",
      defaultValue: false,
    },
    required: {
      type: "boolean",
      defaultValue: false,
    },
    showPlaceholder: {
      type: "boolean",
      defaultValue: false,
    },
    showLabel: {
      type: "boolean",
      defaultValue: false,
    },
    autoWidth: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  if (args.variant === "None") delete args.variant;
  return (
    <Box sx={{ m: 1, minWidth: 120}}>
      <FormControl {...args}>
        {args.showLabel ? <InputLabel>{args.label}</InputLabel> : ""}

        {args.showPlaceholder ? (
          <Select
            displayEmpty
            value={[]}
            renderValue={(selected) => {
              console.log(selected);
              if (selected.length === 0) {
                return <em>{args.placeholderText}</em>;
              }
              return selected.join(", ");
            }}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>{args.placeholderText}</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        ) : (
          <Select {...args}>
            <MenuItem disabled value="" selected>
              <em>Placeholder</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Lets expand to cover this</MenuItem>
          </Select>
        )}
      </FormControl>
    </Box>
  );
};

export const SelectInput = Template.bind({});

SelectInput.args = {
  label: "Select",
};
