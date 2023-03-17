import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "BottomNavigationAction",
  component: BottomNavigationAction,
  argTypes: {
    label: {type: "string", defaultValue: "Navigation"},
    showLabel: {type: "boolean", defaultValue: true},
    value: {type: "string", defaultValue: "navigation"},
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
      defaultValue: "RestoreIcon"
    },
  },
  decorators: [withIconMapped],
};

export const Story = (args) => {
  return (
    <BottomNavigationAction {...args} icon={args.iconName}/>
  )
};