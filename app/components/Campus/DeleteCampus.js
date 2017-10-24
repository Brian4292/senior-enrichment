import React, {Component} from 'react';
import { connect } from 'react-redux';
import {removeCampus} from '../../redux/campus';
class DeleteCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
            campusToDelete: props.delete
    };
    this.DeleteCampus = this.DeleteCampus.bind(this)
  }
 DeleteCampus(){
     const id = this.state.campusToDelete;
     this.props.removeCampus(id);
    }
    render() {
		return (
            <button className="btn btn-danger" onClick={this.DeleteCampus}>Remove</button>
		);

	}
}


const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = { removeCampus };
export default connect(mapState, mapDispatch)(DeleteCampus);

