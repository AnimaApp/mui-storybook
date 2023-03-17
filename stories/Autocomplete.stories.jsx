import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default {
  title: "Autocomplete",
  component: Autocomplete,
  argTypes: {
    label: {
      type: "string",
      defaultValue: "Autocomplete",
    },
    size: {
      type: "select",
      options: ["small", "medium"],
      defaultValue: "medium",
    },
    value: {
      type: "string",
      defaultValue: "The Godfather",
    },
    width: { description: "Width", type: "number", defaultValue: 300 },
    autoComplete: { type: "boolean", defaultValue: false},
    open: { type: "boolean", defaultValue: false},
    disabled: { type: "boolean", defaultValue: false},
  },
};

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export const Story = (args) => {
  return(
    <Autocomplete
      {...args}
      options={top100Films}
      sx={{ width: args.width }}
      renderInput={(params) =>
        <TextField {...params} label={args.label}/>}
    />
  )
};
