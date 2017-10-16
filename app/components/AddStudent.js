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
    console.log(1)

}

  render() {
		return (
            <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <div>
                        <input type="text" name="name" />
                     </div>
                </label>
                <label> Email:
                    <div>
                        <input type="text" name="name" />
                        </div>
                </label> Githb Account:
                <label>
                    <div>
                        <input type="text" name="name" />
                     </div>
                       <select>
                       {this.state.campuses && this.state.campuses.map(campus=>{
                           return (<option value={campus.id} key={campus.name}>{campus.name}</option>)
                       })}
                       </select>
                 </label> Campus:
                <input type="submit" value="Submit" />
          </form>
		);

	}
}