import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../../img/notedlogo_md.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='hero is-warning is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>
            <img src={logo} width='400' />
          </h1>
          <h2 className='subtitle'>
            <strong>Notes and Code Snippets Simplified</strong>
          </h2>
          <h2 className='subtitle'>Built with MERN</h2>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
