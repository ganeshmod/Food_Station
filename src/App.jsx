
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import './index.css';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route element={<Body />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
