import { ReactElement, useState } from "react";
import "./Greeting.css";
type GreetingProps = { name: string; age: number };
const Greeting = (props: GreetingProps): ReactElement => {
  const [currentName, setCurrentName] = useState<string>(props.name);
  function changeMyName(): void {
    console.log("button");
    setCurrentName(props.name + "changed");
  }
  return (
    <>
      <p>
        {" "}
        Hello {props.age} whos is {props.name}
      </p>
      <button onClick={changeMyName}>ChangeMyName</button>
      <h4 className="greeting_text"> test heading </h4>
    </>
  );
};
export default Greeting;
