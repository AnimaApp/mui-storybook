import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
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
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  if (args.variant === "None") delete args.variant;
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState("");
  const theme = useTheme();
  const showLabel = (args) => {
    if (args.showLabel & !args.showPlaceholder) {
      return <InputLabel>{args.label}</InputLabel>;
    }
    return "";
  };

  return (
    <div style={{ minWidth: 100 }}>
      <FormControl
        sx={{ m: 1, width: args.showPlaceholder ? "300" : "80", mt: 3 }}
      >
        {showLabel(args)}
        {args.showPlaceholder ? (
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            renderValue={(selected) => {
              console.log(selected);
              if (selected.length === 0) {
                return <em>{args.placeholderText}</em>;
              }
              return selected.join(",");
            }}
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>{args.placeholderText}</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            {...args}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>
              If you are connected but behind a firewall, check that Firefox has
              permission to access the Web.
            </MenuItem>
          </Select>
        )}
      </FormControl>
    </div>
  );
};

export const SelectInput = Template.bind({});

SelectInput.args = {
  label: "Select",
};
