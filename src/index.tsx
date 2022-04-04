import ReactDOM from "react-dom";
import UserSearch from "./states/UserSearch";
import GuestList from "./states/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
