'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import AllCampus from './components/AllCampus';
import SingleCampus from './components/SingleCampus';
import AddStudent from './components/AddStudent';
import SingleStudent from './components/SingleStudent';
import UpdateStudent from './components/Students/UpdateStudent';

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
			<Route exact path="/campus/:campusId" component={SingleCampus} />
			<Route exact path="/students" component={AllStudents} />
			<Route exact path="/edit/" component={UpdateStudent} />
			<Route exact path="/enroll" component={AddStudent} />
			<Route exact path="/students/:studentId" component={SingleStudent} />
			<Route exact path="/" component={AllCampus} />
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
// make nice looking nav bar and footer static mostly
// style table , change font
// redux ?????
// modulerize router
//split everything by student and campus and neutrel