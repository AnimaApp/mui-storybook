import React from "react";
import { withArgsMapping } from "../src/decorators";
import * as TablerIcons from "@mui/icons-material";

const nameToIcon = (name: string) => {
  const Icon = TablerIcons[name];
  return Icon ? <Icon /> : <></>;
};

const argsMapping = {
  iconName: nameToIcon,
  leftIcon: nameToIcon,
  rightIcon: nameToIcon,
};
const withIconMapped = withArgsMapping(argsMapping);

export default withIconMapped;
