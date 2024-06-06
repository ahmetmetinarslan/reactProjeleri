import React from 'react';
import { Link } from 'react-router-dom';
import "./topbar.css";

export default function TopBar() {
  const currentUser = false;
  return (
    <div className='top'>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-x-twitter"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className='link' to="/">HOME</Link>
            </li>
            <li className="topListItem"><Link className='link' to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className='link' to="/">CONTACT</Link></li>
            <li className="topListItem">
              <Link className='link' to="/write">WRITE</Link>
            </li>
            <li className="topListItem">
              {currentUser && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {
            currentUser ? (
              <img className='topImg' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            ) : (
              <ul className='topList'>
                <li className="topListItem">
                  <Link className='link' to='/login'>LOGIN</Link>
                </li>
                <li className="topListItem">
                <Link className='link' to='/register'>REGISTER</Link>
                </li>
              </ul> 
            )
          }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
