import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { InputBase } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "background.default",
  color: "text.primary",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginLeft: 7,
  },
});

const NavBar = () => {
  const [open , setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <AdbIcon sx={{ display: { xs: "block", md: "none" } }} />
        <Typography
          fontWeight={"bold"}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          MUI APP
        </Typography>
        <Search color="text.primary">
          <InputBase placeholder="Search..." color="text.primary"/>
        </Search>
        <Icons onClick={() => setOpen(!open)}>
          <MailIcon sx={{ width: "30px", height: "40px" }} />
          <Avatar>N</Avatar>
        </Icons>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClick={() => setOpen(!open)}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
