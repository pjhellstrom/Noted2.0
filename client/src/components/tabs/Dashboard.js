import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Notes from "../notes/Notes";

const Dashboard = ({ auth: { user }, note: { note, loading } }) => {
  return loading === true && note.length < 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <p className='title is-3'>
        <i className='fas fa-paperclip' /> Your note collection:
      </p>
      {note !== null ? (
        <Fragment>
          <Notes />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet created a note, please add some info</p>
          <Link to='/create' className='btn btn-primary my-1'>
            Create Note
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  note: state.note
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
