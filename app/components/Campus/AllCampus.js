import React from 'react';
import { Link } from 'react-router-dom';
import DeleteCampus from './deleteCampus';
import { connect } from 'react-redux';

function AllCampus(props) {
  const campusList = props.campuses;
  return (
    <ol>
      {campusList.map(campus => {
          return (
            <div key={campus.id}>
              <Link to={`/campus/${campus.id}`}>
                <br />
                <li>{campus.name}</li>
                <Link to={`/campusedit/${campus.id}`}>Edit</Link>
                <br/>
              <DeleteCampus delete={campus.id} />
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

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(AllCampus);
