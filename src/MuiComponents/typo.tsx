import { Typography } from "@mui/material";

interface ITypoProps {
  size:
    | "smaller"
    | "small"
    | "medium"
    | "large"
    | "larger"
    | "x-large"
    | "xx-large"
    | "xxx-large";
  data: string | number;
  sx?: any;
}

const Typo: React.FunctionComponent<ITypoProps> = ({ size, data, sx }) => {
  return <Typography sx={{ fontSize: size, ...sx }}>{data}</Typography>;
};

export default Typo;
