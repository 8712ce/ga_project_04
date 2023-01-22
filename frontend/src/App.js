// DEPENDENCIES //
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// PAGES //
import Chase from "./pages/Chase";
import CreateZombie from "./pages/CreateZombie";
import Fight from "./pages/Fight";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Outcome from "./pages/Outcome";
import ShowZombie from "./pages/ShowZombie";
import SignUp from "./pages/SignUp";

// COMPONENTS //
import Footer from "./components/Footer";
import Header from "./components/Header";
import EditZombie from "./components/EditZombie";
import { showRoute } from "./utils/api";




function App() {

  // STATE //
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [zombie, setZombie] = useState({})



  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
      showRoute()
      .then((data) => setZombie(data))
    } else {
      setZombie({})
    }
  }, [isLoggedIn])



  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/chase" element={<Chase zombie={zombie} setZombie={setZombie} user={user} setUser={setUser}/>} />

        <Route path="/createzombie" element={<CreateZombie setZombie={setZombie}/>} />

        <Route path="/fight" element={<Fight zombie={zombie} setZombie={setZombie}/>} />

        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUser={setUser} />} />

        <Route path="/outcome" element={<Outcome />} />

        <Route path="/showzombie" element={<ShowZombie zombie={zombie} setZombie={setZombie}/>} />

        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />

      </Routes>

      <Footer setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUser={setUser}/>

    </div>
  );
}

export default App;
