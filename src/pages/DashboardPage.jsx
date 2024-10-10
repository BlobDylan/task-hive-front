import MyTasks from "../components/my-task-components/MyTasks";
import SolutionBox from "../components/solution-box/SolutionBox";
import { Box } from "@mui/material";

function DashboardPage() {
  return (
    <Box
      sx={{
        overflowY: "auto",
        padding: 2,
        border: "1px solid black",
      }}
    >
      <SolutionBox />
      {/* <MyTasks /> */}
    </Box>
  );
}

export default DashboardPage;
