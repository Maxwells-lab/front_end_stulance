import {
  Alert,
  Button,
  Grid,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const LoginServicer = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    width: 400,
    margin: "0px auto",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData = { email: email, password: password };

  const handleEmailChange = (e) => {
    setDisabled(false);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setDisabled(false);
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const url = `${process.env.REACT_APP_API_URL}/user/loginservicer`;
      const { data } = await axios.post(url, loginData);
      console.log(data);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      setTimeout(() => {
        dispatch({ type: "AUTH", data });
        navigate("/portfoliopage");
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid item align="center">
          <Typography
            variant="h5"
            color="primary"
            sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          >
            StuLancer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            placeholder="Enter email"
            variant="standard"
            required
            fullWidth
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: "Nunito" }}
            onChange={handleEmailChange}
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            variant="standard"
            fullWidth
            required
            type="password"
            sx={{ marginBottom: 3 }}
            onChange={handlePasswordChange}
          />

          <Button
            sx={{ marginBottom: 1, fontFamily: "Nunito", fontWeight: "700" }}
            variant="contained"
            fullWidth
            type="submit"
            disabled={disabled}
          >
            Sign in
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={10000}>
          <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>

        <Snackbar open={openerror} autoHideDuration={10000}>
          <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
        <Link
          href="/passwordrecovery-servicer"
          sx={{ marginLeft: 12.5, marginBottom: 2, marginTop: 2 }}
          underline="hover"
        >
          Forgot password ?
        </Link>
        <br />
        <Typography
          sx={{ fontFamily: "Nunito", marginLeft: 3.5 }}
          variant="caption"
        >
          By joining I agree to receive emails from StuLancer.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginServicer;
