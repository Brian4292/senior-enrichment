import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
            campusToDelete: props.delete
    };
    this.DeleteCampus = this.DeleteCampus.bind(this)
  }
 DeleteCampus(){
     const id = this.state.campusToDelete;
        axios.delete(`/api/campus/${id}`)
        .catch(err => {
            console.error('error');
            console.error(err);
        });      
    }
    render() { console.log(this.state)
		return (
            <button className="btn btn-danger" onClick={this.DeleteCampus}>Remove</button>
		);

	}
}