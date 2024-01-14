import React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const loadlazy = () => {
    let name = "";
    for (let i = 0; i <= 10000; i++) {
      console.log(i);
      name = "lazy loader";
    }
    return name;
  };

  return <>{loadlazy()}</>;
};

export default Home;
