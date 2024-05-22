import { Route } from 'react-router-dom/cjs/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';

function App() {
  return (
    <div>
      <Route path='/login'> 
         <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
 
      </div>
    
  );
}

export default App;
