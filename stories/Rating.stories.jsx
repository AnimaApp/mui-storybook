import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default {
  component: Rating,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Button",
    },
    value: {
      type: "select",
      options: [0, 1, 2, 2.5, 3, 4, 5],
      defaultValue: 0,
    },
    icon: {
      type: "select",
      options: ["None", "hearts"],
      defaultValue: "None",
    },
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Template = ({ title, ...args }) => {
  if (args.icon === "None") delete args.icon;
  return (
    <Box>
      <Typography component="legend">{title}</Typography>
      {args.icon === "hearts" ? (
        <StyledRating
          name={title}
          value={args.value}
          {...args}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      ) : (
        <Rating precision={0.5} {...args} />
      )}
    </Box>
  );
};

export const Rate = Template.bind({});

Rate.args = {
  title: "Rate",
  size: "medium",
  value: 0,
};
