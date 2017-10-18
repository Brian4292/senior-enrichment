'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import AllCampus from './components/AllCampus';
import SingleCampus from './components/SingleCampus';
import AddStudent from './components/AddStudent';
import SingleStudent from './components/SingleStudent';
import UpdateStudent from './components/Students/UpdateStudent';
import Root from './components/Root.js';
import UpdateCampus from './components/Campus/UpdateCampus'; //do this
import AddCampus from './components/Campus/AddCampus';

function Main() {
  return (
    <BrowserRouter>
      <div>
        <Link to={`/students`}>
          <button>students</button>
        </Link>
        <Link to={`/`}>
          <button>Campus</button>
        </Link>
        <Switch>
          <Route exact path="/campus/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/edit/:studentId" component={UpdateStudent} />
		      <Route exact path="/campusedit/:campusId" component={UpdateCampus} />
          <Route exact path="/enroll" component={AddStudent} />
          <Route exact path="/addcampus" component={AddCampus} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/" component={AllCampus} />
          <Route component={Root} /> {/*404 Page for the lulz*/}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

render(<Main />, document.getElementById('main'));

//make funny 404
// add campus done
// edit student done
// edit campus
//single student Page
// make everything clickable
// make nice looking nav bar and footer static mostly
// style table , change font
// redux ?????
// modulerize router
//split everything by student and campus and neutrel
