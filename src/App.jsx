
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import LoginForm from './components/LoginForm';

import './index.css';
import SignUp from './utils/SignUp';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route element={<Body />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
