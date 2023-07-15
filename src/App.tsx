import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AuthHandler from '@Login/AuthHandler';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/auth-login/callback" element={<AuthHandler />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;

