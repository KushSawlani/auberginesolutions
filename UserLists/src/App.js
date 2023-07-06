import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingPage from './ListingPage.js';
import UserDetailPage from './UserDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/detail/:id" element={<UserDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
