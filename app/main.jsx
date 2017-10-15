'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Link, HashRouter, Route } from 'react-router-dom';



//import store from './store';
import Root from './components/Root';
import axios from 'axios';
import AllStudents from './components/AllStudents';
import AllCampus from './components/AllCampus';

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
      students: []
    };
  }

  render() {
		return (
      <ol>
      {this.state.students.length && this.state.students.map((student) => {
        return (<li key={student}>{student.name}</li>);
      })}
			</ol>
		);

	}
}


render(
	<HashRouter>
		<div>
		<Link to={`/students`}>
		<button>students</button>
		</Link >
		<Link to={`/`}>
		<button>Campus</button>
		</Link >
		<Route exact path="/" component={AllCampus} />
		<Route exact path="/students" component={AllStudents} />
		</div>
		</HashRouter>
  ,
  document.getElementById('main')
);
