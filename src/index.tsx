import ReactDOM from "react-dom";
import UserSearch from "./states/UserSearch";
import GuestList from "./states/UserSearch";
import Filter from "./react-projects/Filter";
import Counter from "./react-projects/Counter";


const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch /> 
      {/* <Filter /> */}
      {/* <Counter/> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
