import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/tabs/home/home';
import {Projects} from './components/tabs/projects/projects';
import {Contact} from './components/tabs/contact/contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes baseName="Portfolio">
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/projects/*" element={<Projects />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

