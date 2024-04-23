<<<<<<< HEAD
import './App.css';
import Navbar from './shared/Navbar'
import Home from './pages/Home';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";
import Footer from './shared/Footer';
import MembersPage from './pages/MembersPage';
=======
import "./App.css";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Footer from "./shared/Footer";
import AboutSection from "./component/About";
import Section from "./component/section";
import About from "./pages/About";
>>>>>>> f437410eb64d4142fa57f10d3063db4926b2bdd4
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
<<<<<<< HEAD
          <Route exact path="/team" element={<MembersPage/>} />
          <Route exact path="/about" />
          <Route exact path="/contact"  />
          <Route exact path="/achievment"  />
          <Route exact path="/"  element={<Home/>}/>
=======
        <Route exact path="/about" element={<About />}/>

        <Route exact path="/contact" />
        <Route exact path="/achievment" />
        <Route exact path="/" element={<Home />} />
>>>>>>> f437410eb64d4142fa57f10d3063db4926b2bdd4
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
