import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleStudent extends Component {
	constructor() {
		super();
		this.state = {
			student: {},
			campus: {}
    };
  }

  componentDidMount() {
        const id = this.props.match.params.studentId;
		axios.get(`/api/students/${id}`)
			.then(response => {
				return response.data;
			})
			.then(foundStudent => {
				this.setState({student: foundStudent});
				this.setState({campus:foundStudent.campus})
			})
			.catch(err => {
				console.error('error');
				console.error(err);
			});
	}

  render() {
	  const campus = this.state.campus;
	  const student = this.state.student;
	return (
        <div>
        <Link to={`/edit/${this.state.student.id}`}> <button>Edit</button> </Link>
			<h1>{student.name}</h1>
			<img src={student.image} alt=""/>
			<article>{`${student.name} is part of the`} <Link to={`/campus/${campus.id}`}>{campus.name}</Link> Campus. {student.content}</article>
		</div>
	);
}
}