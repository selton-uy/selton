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

export default function AccordionTransition({
  projectName,
  description,
  img,
  link,
  isExpanded,
  handleChange,
}) {
  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange(projectName)}
      slots={{ transition: Grow }}
      slotProps={{ transition: { timeout: 500 } }}
      sx={{
        width: "40vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#222",
        boxShadow: isExpanded ? "0 4px 8px rgba(0,0,0,0.1)" : "none",
        borderRadius: 3,
        transition: "background-color 0.3s ease, box-shadow 1s ease",
        marginBottom: 1,
        color: "#f2f2f2",
        [`& .${accordionClasses.region}`]: {
          height: isExpanded ? "auto" : 0,
        },
        [`& .${accordionDetailsClasses.root}`]: {
          display: isExpanded ? "block" : "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#f2f2f2" }} />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography component="span">{projectName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col gap-8">
          <img src={img} alt="imagem do projeto" />
          <Typography>{description}</Typography>
          <Typography sx={{ textAlign: "right", paddingBlock: 2 }}>
            <a
              href={link}
              target="_blank"
              className="bg-transparent px-10 py-3 rounded-lg hover:bg-[#1DCD9F] hover:text-[#f2f2f2] border-2 border-[#1DCD9F] text-[#1DCD9F] font-bold transition-colors duration-300"
            >
              Acessar o site
            </a>
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
