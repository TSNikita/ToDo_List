import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import Task from './pages/Task';

import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;
