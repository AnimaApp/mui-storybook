import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default {
  title: "Autocomplete",
  component: Autocomplete,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Autocomplete",
    },
    label: {
      type: "string",
      defaultValue: "Autocomplete",
    },
    autoComplete: { type: "boolean", defaultValue: false}
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
      autoComplete={args.autoComplete}
      options={top100Films}
      renderInput={(params) => <TextField {...params} label={args.label} />}
    />
  )
}

export const Autocomplete = Story.bind({});

Autocomplete.args = {
  title: "Autocomplete"
};
