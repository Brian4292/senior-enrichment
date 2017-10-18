import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class updateCampus extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      campusImage: '',
      campusContent: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const updateCampus = {
      name: this.state.campusName,
      image: this.state.campusImage,
      content: this.state.campusContent,
    };
    const id = this.props.match.params.campusId;
    console.log(id)
    axios
      .put(`/api/campus/${id}`, updateCampus)
      .then(res => res.data)
      .then(result => {
        console.log('*********', result); // response json from the server!
      })
      .then(()=>{
        this.props.history.push('/')
      })

    //this.setState({input: ""});
  }

  handleChange(event) {
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
        <label>
        Edit Campus Name:
          <div>
            <input type="text" name="campusName" />
          </div>
        </label>
        <label>
        Image Url (if None Selected You will recieve a random Image):
          <div>
            <input type="text" name="campusImage" />
          </div>
        </label>
        Content(short bio about the class):
        <label>
          <div>
            <textarea type="text" name="campusContent" />
          </div>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(updateCampus)