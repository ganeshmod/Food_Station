
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import LoginForm from './components/LoginForm';
import { ToastContainer } from "react-toastify";

import './index.css';
import SignUp from './utils/SignUp';
import HomePage from './Pages/HomePage';
import Desert from './components/WhatWeOffer';
import Dessert from './components/Dessert';

function App() {
  return (
    <BrowserRouter basename='/'>
      <ToastContainer />
      <Routes>
        <Route element={<Body />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/offers' element={<Desert />} />
          <Route path='/desserts' element={<Dessert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
