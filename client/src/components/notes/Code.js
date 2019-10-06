import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import CodeCard from "./CodeCard";
import { getNotes } from "../../actions/note";

const Code = ({ getNotes, note: { note, loading } }) => {
  useEffect(() => {
    getNotes("Code");
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
                <CodeCard key={singlenote._id} note={singlenote} />
              ))
            ) : (
              <Fragment>
                <p>You have not yet saved any code yet, add some here:</p>
                <Link to='/create' className=''>
                  Create New
                </Link>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Code.propTypes = {
  getNotes: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  note: state.note
});

export default connect(
  mapStateToProps,
  { getNotes }
)(Code);
