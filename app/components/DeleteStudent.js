import React, {Component} from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom'; use history to redirect after promise resolve


export default class DeleteStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
            studentToDelete: props.delete
    };
    this.deleteStudent = this.deleteStudent.bind(this)
  }
 deleteStudent(){
     const id = this.state.studentToDelete;
        axios.delete(`api/students/${id}`)
        .catch(err => {
            console.error('error');
            console.error(err);
        });      
    }
    render() {
        console.log(this.props.history)
		return (
            <button onClick={this.deleteStudent}>Expel</button>   
		);

	}
}