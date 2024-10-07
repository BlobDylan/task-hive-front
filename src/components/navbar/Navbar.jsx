import { AppBar, Box, IconButton, Button, Toolbar, Icon } from "@mui/material";

import { Menu as MenuIcon, Person } from "@mui/icons-material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="person"
            sx={{ mr: 2 }}
          >
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
