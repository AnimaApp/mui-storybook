import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    title: {type: "string", defaultValue: "Accordion"},
    description: {type: "string", defaultValue: "Description"},
    width: {type:"number", defaultValue: 500},
    disabled: {type:"boolean", defaultValue: false},
  }
};

export const Story = (args) => {
  return (
    <Box>
      <Accordion
        {...args}
        sx={{width: args.width}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{args.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {args.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>

  )
};