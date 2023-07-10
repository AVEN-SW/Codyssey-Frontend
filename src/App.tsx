import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AuthHandler from './components/Login/AuthHandler';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/auth-login/callback" element={<AuthHandler />} />
    </Routes>
  );
}

export default App;

