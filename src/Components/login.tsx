import React from "react";
import axiosInstance from "../axios";

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

  return <>Login</>;
};

export default Login;
