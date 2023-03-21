import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    count: { type: "number" },
    defaultPage: { type: "number" },
    siblingCount: { type: "number" },
    boundaryCount: { type: "number" },
    variant: {
      control: {
        type: "select",
        options: ["outlined", "text"],
      }
    },
    shape: {
      control: {
        type: "select",
        options: ["circular", "rounded"],
      }
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      }
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "standard"],
      }
    },
    showFirstButton: { type: "boolean" },
    showLastButton: { type: "boolean" },
    hidePrevButton: { type: "boolean" },
    hideNextButton: { type: "boolean" },
    disabled: { type: "boolean" },
  }
};

export const Default = (args) => {
  return (
    <Pagination {...args}/>
  )
};

Default.args = {
  count: 11,
  defaultPage: 6,
  siblingCount: 0,
  boundaryCount: 2,
  variant: "text",
  shape: "circular",
  size: "medium",
  color: "standard",
  showFirstButton: true,
  showLastButton: true,
  hidePrevButton: false,
  hideNextButton: false,
  disabled: false
};