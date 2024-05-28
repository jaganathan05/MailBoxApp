import { Route } from 'react-router-dom/cjs/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Components/Home/Home';
import Composs from './Components/Home/Composs';
import { Inbox } from 'react-bootstrap-icons';
import InboxPage from './Components/Home/InboxPage';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/login'> 
         <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/Home'>
        <Home/>
      </Route>
      <Route path='/Composs'>
        <Composs />
      </Route>
      <Route path='/inbox'>
        <InboxPage/>
      </Route>
      </Switch>
      
 
      </div>
    
  );
}

export default App;
