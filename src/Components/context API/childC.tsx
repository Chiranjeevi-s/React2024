import ChildD from "./childD";

interface IChildCInterface {}

const ChildC: React.FunctionComponent<IChildCInterface> = () => {
  return (
    <>
      context API - C<ChildD />
    </>
  );
};

export default ChildC;
