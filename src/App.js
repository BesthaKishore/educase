import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home"
import Explore from './components/Explore';
import BookMark from "./components/BookMark"
import Profile from "./components/Profile"
import LoginForm from "./components/LoginForm"

import './App.css';

function App() {
  return (
    <Router>
    <Routes> {/* Replace Switch with Routes */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/explore" element={<Explore />} />
      <Route exact path="/bookmark" element={<BookMark />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/login" element={<LoginForm />} />
    </Routes>
  </Router>
  );
}

export default App;
