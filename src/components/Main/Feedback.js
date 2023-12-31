import {
  Alert,
  Button,
  Grid,
  IconButton,
  Modal,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [opensnack, setSnackOpen] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const feedbackData = {
    fullName: "",
    email: "",
    feedback: "",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const url = `${process.env.REACT_APP_API_URL}/user/feedback`;
      const { data } = await axios.post(url, feedbackData);

      setMessage(data.message);
      setOpenError(false);
      setSnackOpen(true);
      setTimeout(() => {
        setOpen(false);
        setSnackOpen(false);
      }, 1500);
      console.log(feedbackData);
      console.log(data);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    width: 400,
    margin: "100px auto",
  };
  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: 2 }}>
        <Button
          sx={{
            marginTop: 0.8,
            borderRadius: 2,
            fontFamily: "Nunito",
            fontWeight: "700",
            padding: 1.5,
          }}
          size="small"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Feedback
        </Button>

        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Paper style={paperStyle} elevation={6}>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
              sx={{ marginLeft: 41, marginTop: -1.5 }}
            >
              <CloseIcon />
            </IconButton>
            <Grid item align="center">
              <Typography
                variant="h5"
                color="primary"
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  marginBottom: 3,
                }}
              >
                Stulancer
              </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                placeholder="Enter your fullname"
                variant="standard"
                required
                fullWidth
                multiline
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  setDisabled(false);
                  feedbackData.fullName = e.target.value;
                }}
              />
              <TextField
                label="Email"
                type="email"
                placeholder="Enter your Email"
                variant="standard"
                required
                fullWidth
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  setDisabled(false);
                  feedbackData.email = e.target.value;
                }}
              />

              <TextField
                label="Feedback"
                placeholder="Enter your Feedback"
                variant="standard"
                required
                fullWidth
                multiline
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  setDisabled(false);
                  feedbackData.feedback = e.target.value;
                }}
              />

              <Button
                sx={{
                  marginTop: 1.7,
                  marginBottom: 1,
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}
                variant="contained"
                fullWidth
                disabled={disabled}
                type="submit"
              >
                Submit
              </Button>
            </form>
            <Snackbar open={opensnack} autoHideDuration={10000}>
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
        </Modal>
      </Box>
    </Box>
  );
};

export default Feedback;
