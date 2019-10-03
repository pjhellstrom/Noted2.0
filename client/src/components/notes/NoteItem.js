import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteNote } from "../../actions/note";

const NoteItem = ({
  deleteNote,
  auth,
  note: { _id, title, body, category, date }
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <p className='my-1'>{title}</p>
      <p className='my-1'>{body}</p>
      <p className='my-1'>{category}</p>
      <p className='post-date'>
        Created on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <Fragment>
        {!auth.loading && (
          <button
            onClick={() => deleteNote(_id)}
            type='button'
            className='btn btn-danger'>
            <i className='fas fa-times' />
          </button>
        )}
      </Fragment>
    </div>
  </div>
);

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteNote }
)(NoteItem);
