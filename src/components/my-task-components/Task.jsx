import {
  Box,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";
import SubTask from "./SubTask";
import TaskBar from "./TaskBar";

function Task({ task }) {
  const [progress, setProgress] = useState(10);

  const [openaddsubtask, setOpenaddsubtask] = useState(false);

  const handleOpenaddsubtask = () => {
    setOpenaddsubtask(true);
  };

  const handleCloseaddsubtask = () => {
    setOpenaddsubtask(false);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <TaskBar value={progress} task={task} />
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            {task.sub_tasks.map((sub_task, index) => (
              <SubTask key={index} sub_task={sub_task} />
            ))}
          </AccordionDetails>
          <AccordionActions>
            <IconButton onClick={handleOpenaddsubtask}>
              <AddIcon />
            </IconButton>
          </AccordionActions>
        </Accordion>
      </Box>

      <Dialog
        open={openaddsubtask}
        onClose={handleCloseaddsubtask}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            handleCloseaddsubtask();
          },
        }}
      >
        <DialogTitle>New Sub-Task</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            id="name"
            margin="dense"
            name="name"
            label="name"
            type="name"
            defaultValue={"Sub Task"}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            id="due-date"
            margin="dense"
            name="due-date"
            label="due-date"
            type="date"
            defaultValue={"2022-01-01"}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseaddsubtask}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Task;
