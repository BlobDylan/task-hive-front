import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function SubTask({ sub_task }) {
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
          checked={sub_task.completed ?? false}
        />
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">{sub_task.title}</Typography>
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

export default SubTask;
