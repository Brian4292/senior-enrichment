import React, { Component } from 'react';
import axios from 'axios';
import DeleteStudent from './DeleteStudent';
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
        console.log(id,'s@###')
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
            {this.state.student.name}
		</div>
	);
}
}