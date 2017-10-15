import React, { Component } from 'react';
import axios from 'axios';

export default class AllCampus extends Component {
	constructor() {
		super();
		this.state = {
      campuses: []
    }
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
			})
	}

  render() {	
    const image ={ backgroundImage: 'url(../../img/Campus1.png', height: '200px' }
    return (
      <ol>
      {this.state.campuses.length &&this.state.campuses.map((campus,idx)=>{
        return (
            <div>
            <li key={idx}>{campus.name}</li>
                <div style={image}>
                </div>
                </div>
        )
      })}
			</ol>
		)
	}
}