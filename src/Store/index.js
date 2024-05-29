import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Slices/Auth'
import MailReducer from './Slices/Mails'
const store = configureStore({
  reducer:{  Auth : AuthReducer , Mail : MailReducer } 
});



export default store;