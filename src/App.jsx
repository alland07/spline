import './App.css';
import './style/app.scss'
import React from "react";
import Menu from "./Components/Menu.jsx";
import Desk from "./Components/Desk.jsx";
import Carac from "./Components/Carac.jsx";
import Colors from "./Components/Colors.jsx";
import Footer from "./Components/Footer.jsx";

function App() {

  return (
    <div className="App">
      <Menu/>
      <Desk/>
      <Carac/>
      <Colors/>
      <Footer />
    </div>
  )
}

export default App
