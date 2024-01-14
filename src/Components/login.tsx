import React from "react";
import axiosInstance from "../axios";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const loadIntialValues = async () => {
    try {
      let { data } = await axiosInstance.get(`https://dummyjson.com/produc`);
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

    </div>
  );
};

export default Login;
