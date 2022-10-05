import React from "react";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const BoxTwo = () => {
  return (
    <Box
      sx={{
        color: "primary",
        height: "100vh",

        padding: "15px",
      }}
    >
      <Stack direction="row" spacing={25} marginTop={10} marginLeft={10}>
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Our Ultimate Goal
          </Typography>
          <Typography
            variant="body1"
            marginTop={1}
            color="primary"
            fontWeight="bold"
          >
            {" "}
            We aim high trying to design the most effective and efficient
            freelancing platform for KNUST students.
            <br />
            This platform is accessible to all students, and encourages students
            to help each other through the exchange of services.
            <br />
            This will serve as a platform for students to practise what they
            have learnt and gain experience. <br />
            <br />
            We plan on doing all that cultivating our values: <br />
          </Typography>
          <Container>
            <Typography
              variant="body1"
              fontWeight="bold"
              marginTop={1}
              color="primary"
            >
              <CheckCircleOutline color="secondary" />
              Customer obsessed. Our customers come first at all times.
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              marginTop={1}
              color="primary"
            >
              <CheckCircleOutline color="secondary" />
              Transparency. Most of our work is public
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              marginTop={1}
              color="primary"
            >
              <CheckCircleOutline color="secondary" />
              Freedom. We work from anywhere in the world.
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              marginTop={1}
              color="primary"
            >
              <CheckCircleOutline color="secondary" />
              Autonomy. We want to create a safe, high-trust team.
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              marginTop={1}
              color="primary"
            >
              <CheckCircleOutline color="secondary" />
              Excellence. We're aiming high, and we know it.
            </Typography>
          </Container>
        </Container>
        <Container>
          <Grid>
            <Grid item marginTop={5}>
              <Typography variant="h4" fontWeight="bold" color="secondary">
                10
              </Typography>
              <Typography variant="boby3" fontWeight="bold" color="primary">
                Number of Stulancers
              </Typography>
            </Grid>
            <Grid item marginTop={5}>
              <Typography variant="h4" fontWeight="bold" color="secondary">
                10
              </Typography>
              <Typography variant="boby3" fontWeight="bold" color="primary">
                Followers on Twitter
              </Typography>
            </Grid>

            <Grid item marginTop={5}>
              <Typography variant="h4" fontWeight="bold" color="secondary">
                10
              </Typography>
              <Typography variant="boby3" fontWeight="bold" color="primary">
                Stars on GitHub
              </Typography>
            </Grid>
            <Grid item marginTop={5}>
              <Typography variant="h4" fontWeight="bold" color="secondary">
                10
              </Typography>
              <Typography variant="boby3" fontWeight="bold" color="primary">
                Contributers
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default BoxTwo;