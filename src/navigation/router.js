import {Routes,Route,} from 'react-router-dom'
import CollabPeople from '../components/collab-people';
import ForgotPass2 from '../components/forgot-pass2';
import HomePage from '../components/homepage';
import Login from '../components/login';
import Signup from '../components/signup';

export default function Navigation()  {
  return (  
    <Routes>
      <Route path='/s' element={<Signup/>   }/>
      <Route path='/login' element={<Login/>   }/>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/collab' element={<CollabPeople />}></Route>
      <Route path='/forgot' element={<ForgotPass2 />}></Route>
    </Routes>
  );
}
 
