import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjects } from "../../store/actions/projectActions";

import ProjectList from "../projects/ProjectList";
import Spinner from "../layout/Spinner";

const Dashboard = ({ getProjects, auth, project: { projects, loading } }) => {
  const authState = useState(auth);
  useEffect(() => {
    // const id = user._id;
    // if (!authState[0].user._id) {
    //   return;
    // }
    // const userId = authState[0].user._id;
    getProjects("5d97e8838d5d22a7bb9837dd");
  }, [getProjects]);

  // const projects = [
  //   { id: 1, title: "Hello World", content: "Hello World, it's me!" },
  //   { id: 2, title: "Buongiorno Mondo", content: "Buongiorno Mondo, sono io!" },
  //   { id: 3, title: "Bonjour Monde", content: "Bonjour Monde, c'est moi!" }
  // ];

  return loading && projects === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            {projects !== null ? (
              <Fragment>
                <ProjectList projects={projects} />
              </Fragment>
            ) : (
              <Fragment>
                <p>You don't have any notes yet!</p>
                <Link to='/create' className='btn btn-primary my-1'>
                  Create note
                </Link>
              </Fragment>
            )}
          </div>
          <div className='col s12 m5 offset-m1'></div>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);
