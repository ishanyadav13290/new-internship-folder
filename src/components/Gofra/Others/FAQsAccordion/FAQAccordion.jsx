import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lb } from '../../../Static/theme';
import { Box } from '@mui/material';

export default function FAQAccordion({content}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {content.map((el,i)=>{
        return <Accordion sx={{textAlign:"left"}} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i}bh-content`}
          id={`panel${i}bh-header`}
        >
          <Typography color={lb} variant={"h5"} sx={{ width: '40%', flexShrink: 0, fontWeight:700 }}>
            {el.title}
          </Typography> </AccordionSummary>
        <AccordionDetails>
          <Box>
            {el.description}
          </Box>
        </AccordionDetails>
      </Accordion>
      })}
    </div>
  );
}