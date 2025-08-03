import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const LandingIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: "none",
  borderRadius: "4px",
}));
