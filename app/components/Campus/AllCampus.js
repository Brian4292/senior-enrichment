import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteCampus from './deleteCampus';

export default class AllCampus extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      selectedCampus: ''
    };
  }

  componentDidMount() {
    axios
      .get('api/campus/')
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .then(campusList => {
        this.setState({ campuses: campusList });
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });
  }

  render() {
    console.log(this.state.selectedCampus.image)
    return (
      <ol>
        {this.state.campuses.length &&
          this.state.campuses.map(campus => {
            return (
              <div key={campus.id}>
							<DeleteCampus delete={campus.id} />
                <Link  to={`/campus/${campus.id}`}>
                  <br />
                  <Link to={`/campusedit/${campus.id}`}>Edit</Link>
                  <li>{campus.name}</li>
                  <div
                    style={{
                      backgroundImage: `url(${campus.image})`,
                      height: '512px',
                      width: '512px'
                    }}
                  />
                </Link>
              </div>
            );
          })}
      </ol>
    );
  }
}
