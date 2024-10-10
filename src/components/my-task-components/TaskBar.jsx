import {
  Box,
  Typography,
  LinearProgress,
  Checkbox,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useState } from "react";

function TaskBar({ value, task }) {
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
        <Box sx={{ minWidth: "fit-content" }}>
          <Typography variant="body2">{task.title}</Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
          <LinearProgress
            variant="determinate"
            {...{ value }}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "text.primary",
              },
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">{`${Math.round(value)}%`}</Typography>
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

export default TaskBar;
