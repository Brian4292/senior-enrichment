'use strict'
import React, {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store';
import Root from './components/Root';
import axios from 'axios';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
      students: []
    }
  }
  
  componentDidMount() {
		axios.get('api/students')
			.then(response => {
				console.log(response.data)
				
				return response.data;
			})
			.then(StudentList => {
				console.log('success');
				this.setState({students: StudentList});
			})
			.catch(err => {
				console.error('error');
				console.error(err);
			})
	}

  render() {	
		return (
      <ol>
      {this.state.students.length &&this.state.students.map((student,idx)=>{
        return (<li key={idx}>{student.name}</li>)
      })}
			</ol>
		)
		
	}
}


render (
  <div>
    <Root/>
    <Main/>
  </div>
  ,
  document.getElementById('main')
)