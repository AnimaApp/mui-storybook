import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "BottomNavigationAction",
  component: BottomNavigationAction,
  argTypes: {
    label: { type: "string" },
    showLabel: { type: "boolean" },
    value: { type: "string" },
    iconName: {
      control: {
        type: "select",
        options: iconOptions,
        description: "Icon",
        transform: iconTransform,
        required: false,
      },

    },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <BottomNavigationAction {...args} icon={args.iconName}/>
  )
};

Default.args = {
  label: "Navigation",
  value: "navigation",
  showLabel: true,
  iconName: "RestoreIcon"
};