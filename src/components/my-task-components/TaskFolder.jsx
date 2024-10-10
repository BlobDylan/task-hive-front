import { useState } from "react";
import {
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
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Task from "./Task";

function TaskFolder({ folder }) {
  const [openaddtask, setOpenaddtask] = useState(false);

  const handleOpenaddtask = () => {
    setOpenaddtask(true);
  };

  const handleCloseaddtask = () => {
    setOpenaddtask(false);
  };

  return (
    <>
      <Accordion sx={{ width: "100%", backgroundColor: "primary.main" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          {folder.title}
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} sx={{ width: "100%" }}>
            {folder.folders &&
              folder.folders.map((folder, index) => (
                <TaskFolder key={index} folder={folder} />
              ))}
            {folder.tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </Stack>
        </AccordionDetails>
        <AccordionActions>
          <IconButton onClick={handleOpenaddtask}>
            <AddIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>

      <Dialog
        open={openaddtask}
        onClose={handleCloseaddtask}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            handleCloseaddtask();
          },
        }}
      >
        <DialogTitle>New Task</DialogTitle>
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
          <Button onClick={handleCloseaddtask}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TaskFolder;
