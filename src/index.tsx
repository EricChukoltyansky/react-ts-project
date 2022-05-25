import ReactDOM from "react-dom";
import AppComponent from "./components/AppComponent";

const App = () => {
  return (
    <div>
      <AppComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
