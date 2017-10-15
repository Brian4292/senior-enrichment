import React, { Component } from 'react';
import axios from 'axios';

export default class AllStudents extends Component {
	constructor() {
		super();
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