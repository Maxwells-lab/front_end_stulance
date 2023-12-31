import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  Modal,
  Tooltip,
  IconButton,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import React from "react";
import PortfolioPic from "../images/images_3.png";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Resizer from "react-image-file-resizer";
import CloseIcon from "@mui/icons-material/Close";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";

import axios from "axios";
const PortfolioPage = () => {
  document.title = "StuLancer-Dashboard 👩‍💻";
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [opensnack, setOpenSnack] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const [openerror1, setOpenError1] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [sPrice, setsPrice] = useState("");
  const paperStyle = {
    padding: "1.25rem",
    fontFamily: "Nunito",
    fontWeight: "700",
    width: "25rem",
    margin: "6rem auto",
  };

  const paperStyle1 = {
    padding: "1.25rem",
    fontFamily: "Nunito",
    fontWeight: "700",
    width: "25rem",
    margin: "9rem auto",
  };
  const freelancerData = {
    brandPic1: user.result.brandPic1,
    brandPic2: user.result.brandPic2,
    brandPic3: user.result.brandPic3,
  };

  const handleStartingPriceChange = (e) => {
    setsPrice(e.target.value);
    setDisabled(false);
  };
  const startingPrice = {
    startingPrice: sPrice,
  };

  let freelancerId = null;

  //handle submit for starting price only
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log(startingPrice);
    freelancerId = user.result._id;
    try {
      const url = `https://brogrammers-knust.herokuapp.com/user/updatestartingprice/${freelancerId}`;
      const { data } = await axios.patch(url, startingPrice);
      console.log(data.message);
      setMessage(data.message);
      setOpenError1(false);
      setOpenError(false);
      setOpenSnack(true);
      setTimeout(() => {
        window.location.reload();
      }, 1530);
      localStorage.setItem("profile", JSON.stringify(data));
      console.log(freelancerId);
      console.log(startingPrice);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError1(true);
    }
  };

  //handle sumbit for brand pics only
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    freelancerId = user.result._id;
    try {
      const url = `${process.env.REACT_APP_API_URL}/user/updatebrandpics/${freelancerId}`;
      const { data } = await axios.patch(url, freelancerData);
      setMessage(data.message);
      setOpenError(false);
      setOpenError1(false);
      setOpenSnack(true);
      setTimeout(() => {
        window.location.reload();
      }, 1530);
      localStorage.setItem("profile", JSON.stringify(data));
      console.log(freelancerId);
      console.log(freelancerData);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };
  return (
    <Box
      sx={{ minHeight: "78vh", marginLeft: "2.3rem", marginRight: "2.1rem" }}
    >
      <Typography variant="h1" fontFamily="Nunito" marginTop={20} gutterBottom>
        Hello <span> </span>
        <span>StuLancer</span>
        {/*<br /> <span className='highlight1'>Freelancer</span>*/}
        <br />
        <span className="highlight1">
          {user.result.fullName.split(" ")[0]}
          {user.result.fullName.split(" ")[0] ? (
            <span className="emoji" role="img" aria-label="wave emoji">
              👋
            </span>
          ) : (
            <div></div>
          )}
        </span>
      </Typography>
      <img className="PortfolioPic" src={PortfolioPic} alt="3D model" />
      <Typography variant="h4" fontFamily="Nunito">
        Welcome to your portfolio page
      </Typography>
      <Grid container spacing={6} flexWrap>
        {/*First Grid box */}
        <Grid item>
          <Tooltip title="Click to update Starting Price">
            <Box
              sx={{
                backgroundColor: "#e14e67",
                width: 200,
                borderRadius: 2,
                boxShadow: 4,
                marginTop: 6,
                ":hover": { cursor: "pointer" },
              }}
              onClick={() => {
                setOpen1(true);
              }}
            >
              <PaidRoundedIcon
                sx={{ color: "white", marginLeft: 1.5, marginTop: 2 }}
                fontSize="large"
              />

              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Nunito", marginLeft: 1.5, marginTop: 1 }}
                color="white"
                gutterBottom
              >
                Starting Price
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  marginLeft: 1.5,
                  paddingBottom: 2,
                }}
                color="white"
              >
                GHC {user.result.startingPrice}
              </Typography>
            </Box>
          </Tooltip>
        </Grid>
        <Grid sx={{ marginTop: 5.3 }} item>
          {/*First Grid box */}
          <Tooltip title="click to update brand pictures">
            <Card
              sx={{ ":hover": { cursor: "pointer" }, boxShadow: 4 }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Carousel
                sx={{ width: 320, height: 150 }}
                indicators={false}
                autoPlay={true}
              >
                <Box
                  sx={{
                    background: `url(${user.result.brandPic1}) `,
                    width: 320,
                    height: 150,
                    backgroundPositionY: -40,
                    backgroundSize: "cover",
                    borderRadius: 1,
                  }}
                />

                <Box
                  sx={{
                    background: `url(${user.result.brandPic2}) `,
                    width: 320,
                    height: 150,
                    backgroundPositionY: -70,
                    backgroundSize: "cover",
                    borderRadius: 1,
                  }}
                />

                <Box
                  sx={{
                    background: `url(${user.result.brandPic3}) `,
                    width: 320,
                    height: 150,
                    backgroundPositionY: -70,
                    backgroundSize: "cover",
                    borderRadius: 1,
                  }}
                />
              </Carousel>
            </Card>
          </Tooltip>
        </Grid>
      </Grid>

      {/*Modal for taking brand pics*/}
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
              sx={{ fontFamily: "Nunito", fontWeight: "700", marginBottom: 3 }}
            >
              Stulancer
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Typography
              sx={{ fontFamily: "Nunito", color: "#666666", marginBottom: 3 }}
            >
              Upload 3 Branding Pics
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <input
                type="file"
                onChange={(e) => {
                  try {
                    Resizer.imageFileResizer(
                      e.target.files[0],
                      320,
                      150,
                      "JPEG",
                      70,
                      0,
                      (uri) => {
                        freelancerData.brandPic1 = uri;
                      },
                      "base64",
                      200,
                      100
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <input
                type="file"
                onChange={(e) => {
                  try {
                    Resizer.imageFileResizer(
                      e.target.files[0],
                      320,
                      250,
                      "JPEG",
                      70,
                      0,
                      (uri) => {
                        freelancerData.brandPic2 = uri;
                      },
                      "base64",
                      200,
                      100
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <input
                type="file"
                onChange={(e) => {
                  try {
                    Resizer.imageFileResizer(
                      e.target.files[0],
                      320,
                      250,
                      "JPEG",
                      70,
                      0,
                      (uri) => {
                        freelancerData.brandPic3 = uri;
                      },
                      "base64",
                      200,
                      100
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </Box>
            <Button
              sx={{
                marginTop: 1,
                marginBottom: 2,
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="contained"
              fullWidth
              disabled={disabled}
              type="submit"
            >
              Sumbit
            </Button>
          </form>
          <Snackbar open={opensnack} autoHideDuration={1000}>
            <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>

          <Snackbar open={openerror} autoHideDuration={1000}>
            <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        </Paper>
      </Modal>

      {/*Modal for taking starting price */}
      <Modal
        open={open1}
        onClose={() => {
          setOpen1(false);
        }}
      >
        <Paper style={paperStyle1} elevation={6}>
          <IconButton
            onClick={() => {
              setOpen1(false);
            }}
            sx={{ marginLeft: 41, marginTop: -1.5 }}
          >
            <CloseIcon />
          </IconButton>
          <Grid item align="center">
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontFamily: "Nunito", fontWeight: "700", marginBottom: 3 }}
            >
              Stulancer
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit1}>
            <TextField
              label="Starting Price"
              placeholder="Enter your starting price"
              variant="standard"
              required
              fullWidth
              defaultValue={user.result.startingPrice}
              sx={{ marginBottom: 2 }}
              onChange={handleStartingPriceChange}
            />
            <Button
              sx={{
                marginTop: 1,
                marginBottom: 2,
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="contained"
              fullWidth
              disabled={disabled}
              type="submit"
            >
              Sumbit
            </Button>
          </form>
          <Snackbar open={opensnack} autoHideDuration={1000}>
            <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
          <Snackbar open={openerror1} autoHideDuration={1000}>
            <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        </Paper>
      </Modal>
    </Box>
  );
};

export default PortfolioPage;
