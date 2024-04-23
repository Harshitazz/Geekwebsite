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
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/team" element={<MembersPage/>} />
          <Route exact path="/about" />
          <Route exact path="/contact"  />
          <Route exact path="/achievment"  />
          <Route exact path="/"  element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
