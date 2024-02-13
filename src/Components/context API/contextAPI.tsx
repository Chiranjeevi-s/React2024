import { createContext } from "react";
import ChildA from "./childA";

interface IContextAPIInterface {}

// Create the context with an initial value
const MyContext = createContext<any>(null);

const ContextAPI: React.FunctionComponent<IContextAPIInterface> = () => {
  const name = [
    {
      name: "Yoshi",
      age: 23,
      sex: "Female",
    },
    {
      name: "sarfaraz",
      age: 23,
      sex: "Male",
    },
  ];
  return (
    <MyContext.Provider value={name}>
      <ChildA />
    </MyContext.Provider>
  );
};

export default ContextAPI;
export { MyContext };
