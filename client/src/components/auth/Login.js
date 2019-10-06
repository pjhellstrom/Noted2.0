import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container is-vertical-center'>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>Welcome back to Noted!</p>
            <p className='subtitle'>Sign in here</p>
            <div className='content'>
              <form onSubmit={e => onSubmit(e)}>
                <div className='field'>
                  <p className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-envelope'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control has-icons-left'>
                    <input
                      className='input'
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={e => onChange(e)}
                      minLength='6'
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-lock'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control'>
                    <button type='submit' className='button is-dark'>
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
              <br />
              <p className='my-1'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
              </p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
