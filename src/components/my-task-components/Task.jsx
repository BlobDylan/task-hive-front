import {
  Box,
  Typography,
  LinearProgress,
  Checkbox,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import { useState } from "react";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        ml: 1,
        mr: 1,
      }}
    >
      <IconButton>
        <EditIcon />
      </IconButton>
      <Checkbox />
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">Task</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: "text.primary", // Change this to your desired color
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function SubTask() {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
        ml: 5,
        mr: 5,
        mt: 2,
      }}
    >
      <IconButton>
        <EditIcon />
      </IconButton>
      <Checkbox />
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2">Sub Task</Typography>
      </Box>
    </Box>
  );
}

function Task() {
  const [progress, setProgress] = useState(10);
  return (
    <Box sx={{ width: "100%" }}>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <LinearProgressWithLabel value={progress} />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <SubTask />
          <SubTask />
        </AccordionDetails>
        <AccordionActions>
          <IconButton>
            <AddIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </Box>
  );
}

export default Task;
