import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { UsersItem } from "./components/users/UsersItem";

function App() {
  return (
    <div>
      <Navbar title="Github-Finder" icon="fab fa-github" />
      <div className="container">
        <UsersItem />
      </div>
    </div>
  );
}

export default App;
