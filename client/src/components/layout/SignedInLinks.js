import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = ({ logout }) => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Note</NavLink>
      </li>
      <li>
        <NavLink to='/signout' onClick={logout}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          JH
        </NavLink>
      </li>
    </ul>
  );
};

SignedInLinks.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(SignedInLinks);
