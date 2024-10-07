import { Box, Typography } from "@mui/material";
import TaskFolder from "./TaskFolder";

function MyTasks() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ height: "100vh", padding: "1rem" }}
    >
      <Typography variant="h3">My Tasks</Typography>
      <TaskFolder />
      <TaskFolder />
      <TaskFolder />
      <TaskFolder />
    </Box>
  );
}

export default MyTasks;
