import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ComponentA } from "./component/ComponentA";
import { ComponentB } from "./component/ComponentB";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Dashboard } from "./component/Dashboard";
import { Profile } from "./component/Profile";

function App() {
  return (
    <>
      <h2>React Routing</h2>
      <BrowserRouter>
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/dashboard"> Dashboard </Link>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="component1" element={<ComponentA />}></Route>
            <Route path="component2" element={<ComponentB />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
