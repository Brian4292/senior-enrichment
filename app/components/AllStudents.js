import React, { Component } from 'react';
import axios from 'axios';
import DeleteStudent from './DeleteStudent';
import { Link } from 'react-router-dom';

export default class AllStudents extends Component {
	constructor() {
		super();
		this.state = {
    		students: []
    };
  }

  componentDidMount() {
		axios.get('api/students')
			.then(response => {
				return response.data;
			})
			.then(StudentList => {
				this.setState({students: StudentList});
			})
			.catch(err => {
				console.error('error');
				console.error(err);
			});
	}

  render() {
	return (
		<div>
		<Link to={'/enroll'}>
		<button>Add Student</button>		
		</Link>
		<table>
			<tbody>
		{this.state.students.length && this.state.students.map( (student) => {

				return (
					<tr key={student.id}>
					<Link to={`/students/${student.id}`}><th>{student.name}</th></Link>
						<Link to={`/campus/${student.campus.id}`}><th>{student.campus.name}</th></Link>
						<th><DeleteStudent delete={student.id} /></th>
					</tr>
						);
			})
		}
			</tbody>
		</table>
		</div>
	);
}
}
