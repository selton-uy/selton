import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Grow } from "@mui/material";

export default function AccordionTransition({projectName,Description, Img}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 500 } }}
        sx={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: expanded ? "#169976" : "#222", // muda a cor
          boxShadow: expanded ? "0 4px 8px rgba(0,0,0,0.1)" : "none",
          borderRadius: 2,
          marginBottom: 1,
          color:'#f2f2f2',
          [`& .${accordionClasses.region}`]: {
            height: expanded ? "auto" : 0,
          },
          [`& .${accordionDetailsClasses.root}`]: {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{projectName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-row gap-20">
            <img src={Img} alt="imagem do projeto" />
          <Typography>
            {Description}a
          </Typography>
          </div>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
