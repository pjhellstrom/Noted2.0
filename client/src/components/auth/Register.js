import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container is-vertical-center'>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>Get started with Noted!</p>
            <p className='subtitle'>Register here</p>
            <div className='content'>
              <form onSubmit={e => onSubmit(e)}>
                <div className='field'>
                  <p class='help'>We'll greet you with this name in the app!</p>
                  <p className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={e => onChange(e)}
                      required
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-user'></i>
                    </span>
                  </p>
                </div>
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
                      minLength='8'
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-lock'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control has-icons-left'>
                    <input
                      className='input'
                      type='password'
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      value={confirmPassword}
                      onChange={e => onChange(e)}
                      minLength='8'
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-lock'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control'>
                    <button type='submit' className='button is-dark'>
                      Register
                    </button>
                  </p>
                </div>
              </form>
              <br />
              <p className='my-1'>
                Already have an account? <Link to='/login'> Sign In</Link>
              </p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
