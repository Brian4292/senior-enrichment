import React, { Component } from 'react';
import {createNewCampus} from '../../redux/campus';
import { connect } from 'react-redux';


class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)
    this.props.createNewCampus(this.state);
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
        Campus Name:
          <div>
            <input type="text" name="name" />
          </div>
        </label>
        <label>Image Url
                    <div>
            <input type="text" name="image" />
          </div>
        </label>
        <label>Content:
          <div>
            <textarea type="text" name="content" />
          </div>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = {createNewCampus};

export default connect(mapState, mapDispatch)(AddCampus);