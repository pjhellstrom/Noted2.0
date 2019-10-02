import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/collection' />;
  }
  return (
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <p className='title'>Noted 2.0</p>
        <p className='subtitle'>Note taking simplified</p>
        <div className='field is-grouped'>
          <p className='control'>
            <Link to='/login' className='button is-link'>
              Sign In
            </Link>
          </p>
          <p className='control'>
            <Link to='/register' className='button is-link'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Landing);
