import "./app.scss";
import Contacts from "./Components/contacts/Contacts";
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";

import Testimonials from "./Components/schooling/Schooling";
import { useState } from "react";
import MenuBar from "./Components/menu/MenuBar";
import Schooling from "./Components/schooling/Schooling";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MenuBar>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Schooling></Schooling>
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
