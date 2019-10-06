import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import NoteCard from "./NoteCard";
import { getNotes } from "../../actions/note";

const Notes = ({ getNotes, note: { note, loading } }) => {
  useEffect(() => {
    getNotes("Notes");
  }, [getNotes]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className=''>
            {note.length > 0 ? (
              note.map(singlenote => (
                <NoteCard key={singlenote._id} note={singlenote} />
              ))
            ) : (
              <Fragment>
                <p>You have not yet created a note, please add some info</p>
                <Link to='/create' className=''>
                  Create A Note
                </Link>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Notes.propTypes = {
  getNotes: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  note: state.note
});

export default connect(
  mapStateToProps,
  { getNotes }
)(Notes);
