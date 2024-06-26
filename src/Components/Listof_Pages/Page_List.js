import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {PencilSquare , EnvelopeArrowUpFill,  EnvelopeOpenFill} from "react-bootstrap-icons"
import './PageList.css'; 
import { useSelector } from 'react-redux';
import { Authactions } from '../../Store/Slices/Auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function PageList(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const noviewcount = useSelector(state=> state.Mail.NoViewCount)

  const LogoutHandler = ()=>{
    localStorage.removeItem('token')
    dispatch(Authactions.logout())
    history.push('/login')


  }
  return (
    <div>
      <Navbar expand="sm" className="flex-column" >
        <Container className="d-flex flex-column align-items-start">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbartoggle" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-column">
            <Nav className="flex-column" id="navbar">
              <NavLink to='/composs' className='navlink '><PencilSquare/>  Composs</NavLink>
              <NavLink to='/inbox' className='navlink ' ><EnvelopeOpenFill/>  INBOX {noviewcount>0 && <i className='count'>{  noviewcount  }</i>}</NavLink>
              <NavLink to='/sendbox' className='navlink ' ><EnvelopeArrowUpFill/>  SEND BOX </NavLink>
            </Nav>
            <Button className="mt-3" onClick={LogoutHandler}>Logout</Button>
          </Navbar.Collapse>
          {props.showcart && <Button className="btn btn-primary btn-outline-light mt-3" onClick={props.onClick}>CART</Button>}
        </Container>
      </Navbar>
    </div>
  );
}

export default PageList;
