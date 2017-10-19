import React, { Component } from "react";
import { Link } from 'react-router-dom';


function NavBar() {
  return (
   <div id='nav'>
    <ul>
       <li><Link to="/">Campus</Link></li>
       <li><Link to="/students">Students </Link></li>
       <li><Link to="/enroll">Add Student</Link></li>
       <li><Link to="/addcampus">Add Campus</Link></li>
    </ul>
</div>
  )
}

export default NavBar;
