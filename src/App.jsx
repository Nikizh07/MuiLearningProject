import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = React.useState("light");

  const DarkTheme = createTheme(
    {
      palette: {
        mode: mode
      },
    }
  )

  return (
    <ThemeProvider theme={DarkTheme}> 
      <Box bgcolor={"background.default"} minHeight={"100vh"} color={"text.primary"}>
        <NavBar />
        <Stack direction={"row"}  justifyContent={"space-between"} spacing={2}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
};

export default App;
