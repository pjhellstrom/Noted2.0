import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Code from "../notes/Code";

const CodeTab = ({ auth: { user }, note: { note, loading } }) => {
  return loading === true && note.length < 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <p className='title is-3'>
        <i className='fas fa-code' /> Your code collection:
      </p>
      {note !== null ? (
        <Fragment>
          <Code />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet created a note with code yet, please add one!</p>
          <Link to='/create' className='btn btn-primary my-1'>
            Create Note
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

CodeTab.propTypes = {
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
)(CodeTab);
