import React from "react";
import axiosInstance from "../axios";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        Enter Name or Email :{" "}
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
        Password :{" "}
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>

      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
