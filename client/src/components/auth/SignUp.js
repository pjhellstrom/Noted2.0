import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../store/actions/authActions";
import PropTypes from "prop-types";

const SignUp = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    console.log("onSubmit form called");
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match!");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <form onSubmit={e => onSubmit(e)} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up Here</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={e => onChange(e)} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              onChange={e => onChange(e)}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password Again</label>
            <input
              type='password'
              name='password2'
              onChange={e => onChange(e)}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='name'>First Name</label>
            <input type='text' name='name' onChange={e => onChange(e)} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
          </div>
          <p className='my-1'>
            Already have an account? <Link to='/signin'>Sign in</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(SignUp);
