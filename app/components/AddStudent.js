import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
	constructor() {
		super();
		this.state = {
            campuses: [],
            studentName: '',
            studentEmail: '',
            studentAccount: '',
            selectedCampus: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('api/campus')
        .then(response => {
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

handleSubmit(event){
   event.preventDefault();
   const studentForm = {
        name: this.state.studentName,
        email: this.state.studentEmail,
        github: this.state.studentAccount,
        campusId: this.state.selectedCampus
        }
        axios.post('/api/students', studentForm)
        .then(res => res.data)
        .then(result => {
          console.log("*********",result) // response json from the server!
        });

        //this.setState({input: ""});       
}

handleChange(event){
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
}

  render() {
      console.log(this.state)
		return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <label> Name:
                    <div>
                        <input type="text" name="studentName" />
                     </div>
                </label>
                <label> Email:
                    <div>
                        <input type="text" name="studentEmail" />
                        </div>
                </label> Github Account:
                <label>
                    <div>
                        <input type="text" name="studentAccount" />
                     </div>
                </label>
                <label> Select Campus:</label>
                       <select name="selectedCampus">
                       <option >campuses</option>
                       {this.state.campuses && this.state.campuses.map(campus =>{
                           return (<option value={campus.id} key={campus.name}>{campus.name}</option>)
                       })}
                       </select>
                 <br />
                <input type="submit" value="Submit" />
          </form>
		);

	}
}
