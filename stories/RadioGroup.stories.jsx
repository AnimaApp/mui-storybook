import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    position: {type: "boolean"},
    size: {
      type: "select",
      options: ["small", "medium"],
      defaultValue: "medium",
    },
    color: {
      type: "select",
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      defaultValue: 'primary'
    },
    labelPlacement: {
      type: "select",
      options: ['default', 'top', 'start', 'bottom'],
      defaultValue: 'default'
    },
    item: {
      type: "story",
      description: "item",
      label: {type: "string", defaultValue: "Female"},
      disabled: {type: "boolean"}
    },
    item2: {
      type: "story",
      description: "item",
      label: {type: "string", defaultValue: "Male"},
      disabled: {type: "boolean"}
    },
    item3: {
      type: "story",
      description: "item",
      label: {type: "string", defaultValue: "Other"},
      disabled: {type: "boolean"}
    },
  }
};

export const Story = (args) => {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      row={args.position}
    >
      <FormControlLabel {...args} disabled={args.item.disabled} value="female" control={<Radio {...args}/>} label={args.item.label} />
      <FormControlLabel {...args} disabled={args.item2.disabled} value="male" control={<Radio {...args}/>} label={args.item2.label} />
      <FormControlLabel {...args} disabled={args.item3.disabled} value="other" control={<Radio {...args}/>} label={args.item3.label}/>
    </RadioGroup>
  )
}

Story.args = {
  position: false,
  item: {
    label: "Female",
    disabled: false
  },
  item2: {
    label: "Male",
    disabled: false
  },
  item3: {
    label: "Other",
    disabled: false
  },
}