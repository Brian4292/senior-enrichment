import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'; //use history to redirect after promise resolve


class DeleteStudent extends Component {
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
        .then(response => {
            return response.data;
          })
        // .catch(err => {
        //     console.error('error');
        //     console.error(err);
        // })
        .then(() => {
          this.props.history.push('/students');
        });
    }
    render() {
		return (
            <button onClick={this.deleteStudent}>Expel</button>
		);

	}
}

export default withRouter(DeleteStudent);
