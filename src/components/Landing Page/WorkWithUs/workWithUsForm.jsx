import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Handshake } from "@mui/icons-material";
import { lb } from "../../Static/theme";

export default function WorkWithUsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" bgcolor={"white"} color={"black"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
            pb:"20px",
            color:"black",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: lb }}>
          <Handshake />
        </Avatar>
        <Typography component="h1" variant="h5">
        Don't wait! Contact us now to exceed your business targets.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name "
            name="fullName"
            autoComplete="Full Name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email "
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            type={"number"}
            fullWidth
            id="number"
            label="number"
            name="number"
            autoComplete="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Company Name"
            label="Company Name"
            type="text"
            id="companyName"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            type={"number"}
            fullWidth
            placeholder="Annual Turnover (Cr)"
            id="turnover"
            label="Annual Turnover"
            name="turnover"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" fontSize={"12px"}>
                By signing up, you are indicating that you have read and agree
                to Bizongo's Terms & Conditions
              </Link>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
