import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/signup' element={<SignUp /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/appointment' element={
        <RequireAuth>
          <Appointment /> 
        </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
