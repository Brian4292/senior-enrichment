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
		axios.get('api/campus')
			.then(response => {
				console.log(response.data)			
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
    //const image = { backgroundImage: 'url(https://www.pluralsight.com/content/dam/pluralsight/product-release/icon-ruby.png)', height: '512px' }
    return (
      <ol>
      {this.state.campuses.length && this.state.campuses.map((campus, idx) => {
        return (
            <Link to={`/campus/${campus.id}`}>
            <li key={idx}>{campus.name}</li>
                <div style={{ backgroundImage: `url(${campus.image})`, height: '512px', width:'512px' }}>
                </div>
                </Link>
        )
      })}
			</ol>
		)
	}
}

// <Link to={`/students`}>
// <button>students</button>
// </Link >