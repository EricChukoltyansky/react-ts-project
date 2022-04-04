import ReactDOM from "react-dom";
import GuestList from "./states/GuestList";

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
