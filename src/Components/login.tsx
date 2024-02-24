import React from "react";
import axiosInstance from "../axios";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Typo from "../MuiComponents/typo";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const loadIntialValues = async () => {
    try {
      let { data } = await axiosInstance.get(`https://dummyjson.com/products`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    loadIntialValues();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Typo size="x-large" data={'true'} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography>Enter Name or Email : </Typography>
        <TextField
          id="outlined-basic"
          label="Name / Email"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography>Password : </Typography>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>

      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
