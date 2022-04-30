import ReactDOM from "react-dom";
import UserSearch from "./states/UserSearch";
import GuestList from "./states/UserSearch";
import Filter from "./react-projects/filter/Filter";

const App = () => {
  return (
    <div>
      {/* <GuestList />
      <UserSearch /> */}
      <Filter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
