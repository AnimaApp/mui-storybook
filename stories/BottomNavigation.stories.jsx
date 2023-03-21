import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default {
  title: "BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    showLabels: { type: "boolean" },
  },
};


export const Default = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      {...args}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
        <BottomNavigationAction {...args.item}/>
        <BottomNavigationAction {...args.item2}/>
        <BottomNavigationAction {...args.item3}/>
        <BottomNavigationAction {...args.item4}/>
    </BottomNavigation>
  )
};

Default.args = {
  showLabels: false,
  item: {
    label: "Recents",
    showLabel: "true",
    icon: <RestoreIcon />
  },
  item2: {
    label: "Favorites",
    showLabel: "true",
    icon: <FavoriteIcon />
  },
  item3: {
    label: "Nearby",
    showLabel: "true",
    icon: <LocationOnIcon />
  },
  item4: {
    label: "Folder",
    showLabel: "true",
    icon: <FolderIcon />
  },
};

