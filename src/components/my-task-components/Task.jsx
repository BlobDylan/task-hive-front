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
import EditIcon from "@mui/icons-material/Edit";

import { useState } from "react";

function MainTask(props) {
  const [edittaskopen, setEdittaskopen] = useState(false);

  const handleOpenEditTask = () => {
    setEdittaskopen(true);
  };

  const handleCloseEditTask = () => {
    setEdittaskopen(false);
  };

  return (
    <>
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
        <IconButton onClick={handleOpenEditTask}>
          <EditIcon />
        </IconButton>
        <Checkbox
          sx={{
            color: "defaultColor",
            "&.Mui-checked": {
              color: "text.primary",
            },
          }}
        />
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">Task</Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
          <LinearProgress
            variant="determinate"
            {...props}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "text.primary",
              },
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>

      <Dialog
        open={edittaskopen}
        onClose={handleCloseEditTask}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            handleCloseEditTask();
          },
        }}
      >
        <DialogTitle>Edit</DialogTitle>
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
          <Button onClick={handleCloseEditTask}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function SubTask() {
  const [editsubtaskopen, setEditsubtaskopen] = useState(false);

  const handleOpenEditSubTask = () => {
    setEditsubtaskopen(true);
  };

  const handleCloseEditSubTask = () => {
    setEditsubtaskopen(false);
  };

  return (
    <>
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
        <IconButton onClick={handleOpenEditSubTask}>
          <EditIcon />
        </IconButton>
        <Checkbox
          sx={{
            color: "defaultColor",
            "&.Mui-checked": {
              color: "text.primary",
            },
          }}
        />
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">Sub Task</Typography>
        </Box>
      </Box>
      <Dialog
        open={editsubtaskopen}
        onClose={handleCloseEditSubTask}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            handleCloseEditSubTask();
          },
        }}
      >
        <DialogTitle>Edit</DialogTitle>
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
          <Button onClick={handleCloseEditSubTask}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function Task() {
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
            <MainTask value={progress} />
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <SubTask />
            <SubTask />
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
