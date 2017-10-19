import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateCurrentStudent} from './../../redux/students';

class UpdateStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      //image
      //content
      github: '',
      campusId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = this.props.match.params.studentId;
    axios
      .put(`/api/students/${id}`, this.state)
      .then(res => res.data)
      .then(result => {
        console.log('*********', result); // response json from the server!
      }).then (() => {
        this.props.history.push('/students');
      });
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <div>
            <input type="text" name="name" />
          </div>
        </label>
        <label>
          Email:
          <div>
            <input type="text" name="email" />
          </div>
        </label>
        Github Account:
        <label>
          <div>
            <input type="text" name="github" />
          </div>
        </label>
        <label> Select Campus:</label>
        <select name="campusId">
          <option selected="true" disabled="disabled">
            Campus
          </option>
          {this.state.campuses.length &&
            this.state.campuses.map(campus => {
              return (
                <option value={campus.id} key={campus.name}>
                  {campus.name}
                </option>
              );
            })}
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



const mapState = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = { updateCurrentStudent };
export default connect(mapState, mapDispatch)(UpdateStudent);
