import React, { Component } from 'react';
import {createNewStudent} from '../redux/students';
import { connect } from 'react-redux';

class AddStudent extends Component {
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
    this.props.createNewStudent(this.state);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
console.log(event.target);
    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.props);
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
          </option> {/* couldn't figure out how to use default value hence the error */}
          {
            this.props.campuses.map(campus => {
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
const mapDispatch = { createNewStudent };
export default connect(mapState, mapDispatch)(AddStudent);

