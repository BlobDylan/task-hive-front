import { useState, useEffect, useRef } from "react";

import { Box, AppBar, Toolbar, IconButton, Tabs, Tab } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import { ReactSummernoteLite } from "@easylogic/react-summernote-lite";

import CanvasDraw from "react-canvas-draw";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SolutionBox() {
  const [code, setCode] = useState(
    `function add(a, b) {
    return a + b;
}
console.log(add(1, 2));`
  );

  const canvasWrapperRef = useRef(null);

  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 1024,
    height: 768,
  });
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (canvasWrapperRef.current) {
      const { offsetWidth, offsetHeight } = canvasWrapperRef.current;
      setCanvasDimensions({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [value]);

  return (
    <Box height={"50vh"} width={"50vw"}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1c1c1c",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          textColor="primary"
          indicatorColor="primary"
          sx={{ flexGrow: 1 }}
        >
          <Tab label="Code" {...a11yProps(0)} sx={{ color: "white" }} />
          <Tab label="Text" {...a11yProps(1)} sx={{ color: "white" }} />
          <Tab label="Doodle" {...a11yProps(2)} sx={{ color: "white" }} />
        </Tabs>
        <Toolbar>
          <IconButton
            size="small"
            color="inherit"
            aria-label="close"
            sx={{ ml: "auto" }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {value === 0 && (
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            border: "1px solid #1c1c1c",
            height: "100%",
            width: "100%",
          }}
        />
      )}
      {value === 1 && (
        <ReactSummernoteLite
          options={{
            lang: "ru-RU",
            dialogsInBody: true,
            toolbar: [
              ["style", ["style"]],
              ["font", ["bold", "underline", "clear"]],
              ["fontname", ["fontname"]],
              ["para", ["ul", "ol", "paragraph"]],
              ["table", ["table"]],
              ["insert", ["link", "picture", "video"]],
              ["view", ["fullscreen", "codeview"]],
            ],
          }}
        />
      )}
      {value === 2 && (
        <Box
          ref={canvasWrapperRef}
          sx={{ width: "100%", height: "100%", position: "relative" }}
        >
          <CanvasDraw
            canvasWidth={canvasDimensions.width}
            canvasHeight={canvasDimensions.height}
            brushColor="black"
            brushRadius={3}
          />
        </Box>
      )}
    </Box>
  );
}

export default SolutionBox;
