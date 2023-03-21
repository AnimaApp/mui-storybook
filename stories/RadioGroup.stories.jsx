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
      control: {
        type: "select",
        options: ["small", "medium"],
      }
    },
    color: {
      control: {
        type: "select",
        options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      }
    },
    labelPlacement: {
      control: {
        type: "select",
        options: ['default', 'top', 'start', 'bottom'],
      }
    },
    item: {
      type: "story",
      description: "item",
      label: { type: "string" },
      disabled: { type: "boolean" }
    },
    item2: {
      type: "story",
      description: "item",
      label: { type: "string" },
      disabled: { type: "boolean" }
    },
    item3: {
      type: "story",
      description: "item",
      label: { type: "string" },
      disabled: { type: "boolean" }
    },
  }
};

export const Default = (args) => {
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

Default.args = {
  position: false,
  size: "medium",
  color: "primary",
  labelPlacement: "default",

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