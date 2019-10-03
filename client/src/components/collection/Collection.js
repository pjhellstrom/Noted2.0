import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import NoteCreate from "../notes/NoteCreate";
import NoteItem from "../notes/NoteItem";
import { getNotes } from "../../actions/note";

const Collection = ({ getNotes, note: { notes, loading }, auth: { user } }) => {
  useEffect(async () => {
    await getNotes(user._id);
  }, [getNotes]);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>My notes</h1>
      <p className='lead'>Hi! Welcome to Noted 2.0</p>
      <NoteCreate />
      <div className='notes'>
        {notes.map(note => (
          <NoteItem key={note._id} note={note} />
        ))}
      </div>
    </Fragment>
  );
};

Collection.propTypes = {
  getNotes: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  note: state.note,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getNotes }
)(Collection);
