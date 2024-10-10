import { Box, Typography, Stack } from "@mui/material";
import TaskFolder from "./TaskFolder";

function MyTasks() {
  let usertasks = {
    folders: [
      {
        title: "Folder 1",
        folders: [],
        tasks: [
          {
            title: "Task 1",
            description: "Description 1",
            due_date: "2022-12-31",
            progress: 50,
            completed: false,
            sub_tasks: [
              {
                title: "Sub-Task 1",
                description: "Description 1",
                due_date: "2022-12-31",
                completed: true,
              },
              {
                title: "Sub-Task 2",
                description: "Description 2",
                due_date: "2022-12-31",
                completed: false,
              },
            ],
          },
          {
            title: "Task 2",
            description: "Description 2",
            due_date: "2022-12-31",
            progress: 75,
            completed: false,
            sub_tasks: [],
          },
        ],
      },
      {
        title: "Folder 2",
        folders: [
          {
            title: "Folder 3",
            folders: [],
            tasks: [
              {
                title: "Task 1",
                description: "Description 1",
                due_date: "2022-12-31",
                progress: 50,
                completed: false,
                sub_tasks: [],
              },
            ],
          },
        ],
        tasks: [
          {
            title: "Task 1",
            description: "Description 1",
            due_date: "2022-12-31",
            progress: 50,
            completed: false,
            sub_tasks: [],
          },
        ],
      },
    ],
    tasks: [],
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ height: "100vh", padding: "1rem" }}
    >
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Typography variant="h3">My Tasks</Typography>
        {usertasks.folders.map((folder, index) => (
          <TaskFolder key={index} folder={folder} />
        ))}
      </Stack>
    </Box>
  );
}

export default MyTasks;
