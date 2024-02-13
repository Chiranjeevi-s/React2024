import { MyContext } from "./contextAPI";

interface IChildDInterface {}

const ChildD: React.FunctionComponent<IChildDInterface> = () => {
  return (
    <>
      context API - D
      <MyContext.Consumer>
        {(name) => {
          return (
            <>
              {name.map((item: any, index: any) => (
                <div key={index}>
                  Hii I'am {item.name} am {item.sex} and am {item.age} old
                </div>
              ))}
            </>
          );
        }}
      </MyContext.Consumer>
    </>
  );
};

export default ChildD;
