import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateStudent extends Component {
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
    axios.get('api/campus/')
        .then(response => {
            return response.data;
        })
        .then(campusList => {
            console.log(campusList, 'sASd33');
            this.setState({campuses: campusList});
        })
        .catch(err => {
            console.error('error');
            console.error(err);
        });
}

handleSubmit(event){
   event.preventDefault();
   const studentForm = {};
   if (this.state.studentName) studentForm.name = this.state.studentName;
   if (this.state.studentEmail) studentForm.email = this.state.studentEmail;
   if (this.state.studentAccount) studentForm.github = this.state.studentAccount;
   if (this.state.selectedCampus) studentForm.campusId = this.state.selectedCampus;
   console.log(studentForm);
        const id = this.props.match.params.studentId;
        console.log(id, '!!@@ID@##$');
        axios.put(`/api/students/${id}`, studentForm)
        .then(res => res.data)
        .then(result => {
          console.log('*********', result); // response json from the server!
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
    // console.log(this.state)
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
                      {this.state.campuses.length && this.state.campuses.map(campus => {
                          return (<option value={campus.id} key={campus.name}>{campus.name}</option>);
                      })}
                      </select>
                <br />
               <input type="submit" value="Submit" />
         </form>
       );

   }
}

