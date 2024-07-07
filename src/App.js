
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './navigation/router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>


  );
}

export default App;
