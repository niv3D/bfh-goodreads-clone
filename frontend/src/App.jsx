import "./App.css";
import MainComponent from "./components/main";
import Header from "./components/main/header";
import UserComponent from "./components/user";

function App() {
  return (
    <div className="App">
      <div className="Main-wrapper">
        <Header />
        <MainComponent />
      </div>
      <UserComponent />
    </div>
  );
}

export default App;
