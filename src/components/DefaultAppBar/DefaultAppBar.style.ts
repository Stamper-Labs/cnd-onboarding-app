import { AppBar, styled } from "@mui/material";

// AppBar is by default flex column
export const DefaultAppBarStyle = styled(AppBar)(() => ({
  backgroundColor: "blue",
  height: "80px",
  justifyContent: "center",
}));
