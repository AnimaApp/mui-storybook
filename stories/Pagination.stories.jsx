import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    count: {type: "number", defaultValue: 11},
    defaultPage: {type: "number", defaultValue: 6},
    siblingCount: {type: "number", defaultValue: 0},
    boundaryCount: {type: "number", defaultValue: 2},
    variant: {
      type: "select",
      options: ["outlined", "text"],
      defaultValue: "text",
    },
    shape: {
      type: "select",
      options: ["circular", "rounded"],
      defaultValue: "circular",
    },
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: {
      type: "select",
      options: ["primary", "secondary", "standard"],
      defaultValue: "standard",
    },
    showFirstButton: {type: "boolean", defaultValue: true},
    showLastButton: {type: "boolean", defaultValue: true},
    hidePrevButton: {type: "boolean", defaultValue: false},
    hideNextButton: {type: "boolean", defaultValue: false},
    disabled: {type: "boolean", defaultValue: false},
  }
};

export const Story = (args) => {
  return (
    <Pagination {...args}/>
  )
};