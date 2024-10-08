import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Task from "./Task";

function TaskFolder() {
  return (
    <Accordion sx={{ width: "100%", backgroundColor: "primary.main" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Folder
      </AccordionSummary>
      <AccordionDetails>
        <Task />
      </AccordionDetails>
      <AccordionActions>
        <IconButton>
          <AddIcon />
        </IconButton>
      </AccordionActions>
    </Accordion>
  );
}

export default TaskFolder;
