import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <ChildAsFC color="black" onClick={() => console.log("onClick")}>
        kjlkjlk
      </ChildAsFC>
    </>
  );
};

export default Parent;
