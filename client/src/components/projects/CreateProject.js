import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

const CreateProject = ({ createProject, auth: { user } }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  const { title, body } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const id = user._id;

    createProject({ title, body, id });
  };

  return (
    <div className='container'>
      <form onSubmit={e => onSubmit(e)} className='white'>
        <h5 className='grey-text text-darken-3'>Create Project</h5>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' onChange={e => onChange(e)} />
        </div>
        <div className='input-field'>
          <label htmlFor='content'>Note</label>
          <textarea
            className='materialize-textarea'
            name='body'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Create</button>
        </div>
      </form>
    </div>
  );
};

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createProject }
)(CreateProject);
