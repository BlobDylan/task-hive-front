import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { Menu as MenuIcon, Person } from "@mui/icons-material";

function Navbar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" edge="end" aria-label="person">
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
