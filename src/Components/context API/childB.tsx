import ChildC from "./childC";

interface IChildBInterface {}

const ChildB: React.FunctionComponent<IChildBInterface> = () => {
  return (
    <>
      context API - B<ChildC />
    </>
  );
};

export default ChildB;
