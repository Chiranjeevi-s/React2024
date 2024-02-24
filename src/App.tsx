import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Route";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={route} />
      </div>
    </ThemeProvider>
  );
}

export default App;
