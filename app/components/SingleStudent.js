import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleStudent extends Component {
	constructor() {
		super();
		this.state = {
      		student: {}
    };
  }

  componentDidMount() {
        const id = this.props.match.params.studentId;
		axios.get(`/api/students/${id}`)
			.then(response => {
				return response.data;
			})
			.then(foundStudent => {
                console.log(foundStudent)
				this.setState({student: foundStudent});
			})
			.catch(err => {
				console.error('error');
				console.error(err);
			});
	}

  render() {
      // fix back route to include all and grab the student
      // campus, add fake content, and profile picture
	return (
        <div>
        <Link to={`/edit/${this.state.student.id}`}> <button>Edit</button> </Link>
            {this.state.student.name}
            Make a link to campus and add picture for the student and add random content
		</div>
	);
}
}