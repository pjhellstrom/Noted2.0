import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import logo from "../../img/notedlogo_md.png";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/'>
          <a className='navbar-item'>
            <img src={logo} width='112' height='28' />
          </a>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link to='/dashboard'>
            <a className='navbar-item'>Notes</a>
          </Link>
          <Link to='/code'>
            <a className='navbar-item'>Code</a>
          </Link>
          <Link to='/create'>
            <a className='navbar-item'>New Note </a>
          </Link>
        </div>
      </div>

      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <a className='button is-dark' onClick={logout} href='#!'>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/'>
          <a className='navbar-item'>
            <img src={logo} width='112' height='28' />
          </a>
        </Link>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <Link to='/login'>
              <a class='button is-warning'>Sign In</a>
            </Link>
            <Link to='/register'>
              <a class='button is-light'>Register</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <Fragment>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
