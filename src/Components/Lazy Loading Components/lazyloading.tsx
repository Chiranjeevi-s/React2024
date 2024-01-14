import { Suspense, lazy } from "react";
import { Paper } from "@mui/material";

interface ILazyLoadingProps {}

const Home = lazy(() => import("./home"));
const LazyLoading: React.FunctionComponent<ILazyLoadingProps> = () => {
  return (
    <Paper>
      <h1>LazyLoading</h1>
      <Suspense
        fallback={<div>Please Wait for 10000 count in console ..!!!!!!</div>}
      >
        <Home />
      </Suspense>
    </Paper>
  );
};

export default LazyLoading;
