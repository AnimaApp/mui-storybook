import * as TablerIcons from "@mui/icons-material";

export const iconOptions = ["None", ...Object.keys(TablerIcons)];
export const iconTransform =
  "<% if (param !== 'None') { %><TablerIcons.<%= param %> /><% } else { %> '' <% } %>";