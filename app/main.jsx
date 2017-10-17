'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import AllCampus from './components/AllCampus';
import SingleCampus from './components/SingleCampus';
import AddStudent from './components/AddStudent';

function Main () {
		return (
			<BrowserRouter>
			<div>
			<Link to={`/students`}>
			<button>students</button>
			</Link >
			<Link to={`/`}>
			<button>Campus</button>
			</Link >
			<Switch>
				<Route exact path="/" component={AllCampus} />
				<Route exact path="/campus/:campusId" component={SingleCampus} />
				<Route exact path="/students" component={AllStudents} />
				<Route exact path="/enroll" component={AddStudent} />
			</Switch>
			</div>
			</BrowserRouter>
		);
}


render(
  <Main />,
  document.getElementById('main')
);

//make funny 404
// add campus
// edit student
// edit campus 
//single student Page 
// make everything clickable