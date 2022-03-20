import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { DataGridPro, GridToolbar } from "@mui/x-data-grid-pro";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import data from "./data.json";

export default {
  component: "Table3",
  argTypes: {
    numberOfColumns: {
      type: "select",
      options: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      defaultValue: 4,
    },
    numberOfRows: {
      type: "select",
      options: [3, 4, 5, 6, 7, 8, 9, 10],
      defaultValue: 4,
    },
    pageSize: {
      type: "select",
      options: ["off", "auto", 25, 100],
      defaultValue: "off",
    },
    checkboxSelection: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 600,
  width: "100%",
  "& .MuiFormGroup-options": {
    alignItems: "center",
    paddingBottom: theme.spacing(1),
    "& > div": {
      minWidth: 100,
      margin: theme.spacing(2),
      marginLeft: 0,
    },
  },
}));

const Template = (args) => {
  const [sizeRows, setSizeRows] = React.useState(3);
  const [sizeColumns, setSizeColumns] = React.useState(2);
  const [dataGrid, setDataGrid] = React.useState({
    columns: [...data.columns].splice(sizeColumns),
    rows: [...data.rows].splice(0, sizeRows),
  });

  const [pagination, setPagination] = React.useState({
    pagination: false,
    autoPageSize: false,
    pageSize: undefined,
  });

  React.useEffect(() => {
    if (args.pageSize === "off") args.pageSize = -1;
    if (args.pageSize === "auto") args.pageSize = 10;

    const newPaginationSettings = {
      pagination: args.pageSize !== -1,
      autoPageSize: args.pageSize === 0,
      pageSize: args.pageSize > 0 ? args.pageSize : undefined,
    };

    setPagination((currentPaginationSettings) => {
      if (
        currentPaginationSettings.pagination ===
          newPaginationSettings.pagination &&
        currentPaginationSettings.autoPageSize ===
          newPaginationSettings.autoPageSize &&
        currentPaginationSettings.pageSize === newPaginationSettings.pageSize
      ) {
        return currentPaginationSettings;
      }
      return newPaginationSettings;
    });

    if (sizeRows !== args.numberOfRows) {
      setSizeRows(args.numberOfRows);
      setDataGrid({
        columns: dataGrid.columns,
        rows: [...data.rows].splice(Number(0), Number(args.numberOfRows)),
      });
    }

    if (sizeColumns !== args.numberOfColumns) {
      setSizeColumns(args.numberOfColumns + 1);
      setDataGrid({
        columns: [...data.columns].splice(0, args.numberOfColumns + 1),
        rows: dataGrid.rows,
      });
    }
  }, [args]);

  return (
    <StyledBox>
      <DataGridPro
        {...args}
        {...dataGrid}
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          ...data.initialState,
          pinnedColumns: { left: ["__check__", "desk"] },
        }}
        {...pagination}
      />
    </StyledBox>
  );
};

export const Table = Template.bind({});

Table.args = {
  pageSize: "off",
};
