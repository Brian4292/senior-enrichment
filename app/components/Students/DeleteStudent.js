import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'; //use history to redirect after promise resolve
import { connect } from 'react-redux';
import {removeStudent} from '../../redux/students';

class DeleteStudent extends Component {
	constructor(props) {
		super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
 
  deleteStudent(){
    const id = this.props.delete;
    this.props.removeStudent(id);
  }
  render() {
		return (
            <button onClick={this.deleteStudent}>Expel</button>
		);

  }

}

const mapState = ({ students }) => ({ students });
const mapDispatch = { removeStudent };
export default connect(mapState, mapDispatch)(DeleteStudent);

