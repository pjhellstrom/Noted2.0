import React from "react";
import { deleteNote } from "../../actions/note";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";

const CodeCard = ({
  deleteNote,
  note: { _id, title, body, date, category }
}) => {
  return (
    <article className='message is-primary is-medium'>
      <div className='message-header'>
        <p>{title}</p>
        <button
          onClick={() => deleteNote(_id)}
          className='delete is-medium'
          aria-label='delete'></button>
      </div>
      <div className='message-body'>
        <small>
          <Moment format='MMM D, YYYY'>{date}</Moment>
        </small>{" "}
        <small> - In {category}</small>
        <br />
      </div>
      <div className='message-body'>
        {" "}
        <pre className='prettyprint'>
          <code className='language-groovy'>{body}</code>
        </pre>
      </div>
    </article>
  );
};

CodeCard.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteNote }
)(CodeCard);
