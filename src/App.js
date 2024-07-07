import Login from './components/login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup';
import ForgotPass from './components/forgot-pass';
import ForgotPass2 from './components/forgot-pass2';
import ResetPassword from './components/reset-pass';
import CompleteProfile from './components/completeProfile';
import ResetPassword2 from './components/reset-pass2';
import Navigation from './navigation/router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/homepage';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>


  );
}

export default App;
