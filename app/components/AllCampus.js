import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class AllCampus extends Component {
	constructor() {
		super();
		this.state = {
      campuses: [],
      selectedCampus: ''
    };
  }

  componentDidMount() {
		axios.get('api/campus/')
			.then(response => {
				console.log(response.data);
				return response.data;
			})
			.then(campusList => {
				this.setState({campuses: campusList});
			})
			.catch(err => {
				console.error('error');
				console.error(err);
			});
	}

  render() {
    return (
      <ol>
				<Link to={'/addcampus'}>Add Campus</Link>
      {this.state.campuses.length && this.state.campuses.map((campus) => {
        return (
            <Link key={campus.id} to={`/campus/${campus.id}`}>
            	<li >{campus.name}</li>
              <div style={{ backgroundImage: `url(${campus.image})`, height: '512px', width: '512px' }} />
            </Link>
        );
      })}
			</ol>
		);
	}
}