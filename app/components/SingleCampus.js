import React, {Component} from 'react';
import axios from 'axios';


export default class AllCampus extends Component {
	constructor() {
		super();
		this.state = {
            studentsList: []
        };
  }

  componentDidMount() {
    const id = this.props.match.params.campusId;
    console.log(id);
	axios.get(`/api/campus/${id}`)
		.then(response => {		
			return response.data;
		})
		.then(campus => {
            this.setState({studentsList: campus});
		})
		.catch(err => {
		    console.error('error');
		    console.error(err);
			});
	}

  render() {	
      console.log(this.state.studentsList)
    return (
        <div>
        <h1>Campus Student List</h1>
        {

            this.state.studentsList.length && this.state.studentsList.map( student => {
                return (<p key={student.name}>{student.name}</p>)
            })
        }
        </div>
    );
}
}