import { Route } from 'react-router-dom/cjs/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Route path='/login'> 
         <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/Home'>
        <Home/>
      </Route>
 
      </div>
    
  );
}

export default App;
