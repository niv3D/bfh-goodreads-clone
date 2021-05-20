
import "./App.css";
import MainComponent from "./components/main";
import RouteComponent from "./components/routes";
import UserComponent from "./components/user";

function App() {
  return (
    <div className="App">
      <RouteComponent />
      <MainComponent />
      <UserComponent />
    </div>
  );
}

export default App;
