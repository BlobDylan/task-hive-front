import { styled } from "@mui/material/styles";

import {
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
  Container,
} from "@mui/material";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "react-router-dom";

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const FooterLinks = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const FooterButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: "none",
}));

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        padding: (theme) => theme.spacing(4),
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h5" align="center">
          Footer
        </Typography>
        <SocialIcons>
          <IconButton
            component="a"
            href="https://www.X.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </SocialIcons>
        <FooterLinks container>
          <Link to="/">
            <FooterButton>Link1</FooterButton>
          </Link>
          <Link to="/">
            <FooterButton>Link2</FooterButton>
          </Link>
          <Link to="/">
            <FooterButton>Link3</FooterButton>
          </Link>
          <Link to="/">
            <FooterButton>Link4</FooterButton>
          </Link>
        </FooterLinks>
        <Typography variant="body2" align="center" color="text.secondary">
          Some Text
        </Typography>
      </Container>
    </Box>
  );
}
