import ChildB from "./childB";

interface IChildAInterface {}

const ChildA: React.FunctionComponent<IChildAInterface> = () => {
  return (
    <>
      context API - A <ChildB />
    </>
  );
};

export default ChildA;
