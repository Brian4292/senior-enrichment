import React, {Component} from 'react';
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
            <button className="btn btn-danger" onClick={this.deleteStudent}>Expel</button>
		);

  }

}

const mapState = ({ students }) => ({ students });
const mapDispatch = { removeStudent };
export default connect(mapState, mapDispatch)(DeleteStudent);

