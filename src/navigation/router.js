import { Routes, Route, } from 'react-router-dom'
import CollabPeople from '../components/CollabPeople';
import ForgotPass2 from '../components/ForgotPass2';


import Signup from '../components/Signup';
import HomePage from '../pages/Homepage';
import Login from '../pages/Login';

export default function Navigation() {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/collab' element={<CollabPeople />}></Route>
      <Route path='/forgot' element={<ForgotPass2 />}></Route>
    </Routes>
  );
}

