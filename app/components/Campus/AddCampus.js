import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AddCampus extends Component {
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
    const makeCampus = {
      name: this.state.campusName,
      image: this.state.campusImage,
      content: this.state.campusContent,
    };
    axios
      .post('/api/campus', makeCampus)
      .then(res => res.data)
      .then(result => {
        console.log('*********', result); // response json from the server!
      }).
      then(() => {
        this.props.history.push('/');
      })
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
        Campus Name:
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

export default withRouter(AddCampus);