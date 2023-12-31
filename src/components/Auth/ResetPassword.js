import React from "react";
import { useState } from "react";
import {
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  let { id, token } = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [openerror, setOpenError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    width: 400,
    margin: "100px auto",
  };

  const [password, setPassword] = useState("");
  const resetpasswordData = { password: password };

  const handlePasswordChange = (e) => {
    setDisabled(false);
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log(resetpasswordData);
    try {
      const url = `${process.env.REACT_APP_API_URL}/passwordrecovery/reset-password/${id}/${token}`;
      const { data } = await axios.post(url, resetpasswordData);
      console.log(data);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle} elevation={6}>
        <Grid item align="center">
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          >
            StuLancer Password Reset
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type="password"
            label="Password"
            placeholder="Enter your new password"
            variant="standard"
            required
            fullWidth
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: "Nunito" }}
            onChange={handlePasswordChange}
          />

          <Button
            sx={{
              marginBottom: 1,
              fontFamily: "Nunito",
              fontWeight: "700",
              marginTop: 2,
            }}
            variant="contained"
            fullWidth
            disabled={disabled}
            type="submit"
          >
            Sumbit
          </Button>
          <Typography sx={{ fontFamily: "Nunito" }} variant="body2">
            Reset your password
          </Typography>
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
      </Paper>
    </Grid>
  );
};

export default ResetPassword;
