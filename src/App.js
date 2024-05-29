import { Route } from 'react-router-dom/cjs/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Components/Home/Home';
import Composs from './Components/Home/Composs';
import InboxPage from './Components/Home/InboxPage';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedin = useSelector(state=> state.Auth.isLoggedin) 

  return (
    <div>
      <Switch> 
        {
          !isLoggedin && 
        <div>
        <Route path='/login'> 
          <Login/>
       </Route>
       <Route path='/signup'>
         <Signup/>
       </Route> 
       <Route path='*'>
        <Redirect to='/login' />
       </Route>
        </div>
        
        }
      {
        isLoggedin && 
        <div>
      <Route path='/Home'>
        <Home/>
      </Route>
      <Route path='/Composs'>
        <Composs />
      </Route>
      <Route path='/inbox'>
        <InboxPage/>
      </Route>
      <Route path='*'>
        <Redirect to='/Home'/>
       </Route>
        </div>
      }
      
      </Switch>
      
 
      </div>
    
  );
}

export default App;
