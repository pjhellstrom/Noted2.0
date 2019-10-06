import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createNote } from "../../actions/note";

const CreateNote = ({ createNote, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    category: "Notes"
  });

  const { title, body, category } = formData;

  const onChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    console.log("onSubmit createNote with formdata:", formData);
    e.preventDefault();
    createNote(formData, history);
  };

  return (
    <Fragment>
      <div className='container is-vertical-center'>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>Create a Note</p>
            <p className='subtitle'>What's on your mind?</p>
            <div className='content'>
              <form onSubmit={e => onSubmit(e)}>
                <div className='field'>
                  <p className='control has-icons-left has-icons-right'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Title'
                      name='title'
                      value={title}
                      onChange={e => onChange(e)}
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-paragraph'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control has-icons-left has-icons-right'>
                    <textarea
                      className='input'
                      type='text'
                      placeholder='Body'
                      name='body'
                      value={body}
                      onChange={e => onChange(e)}
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-align-left'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control has-icons-left'>
                    <span className='select'>
                      <select
                        name='category'
                        value={category}
                        onChange={e => onChange(e)}>
                        <option value='Notes'>Notes</option>
                        <option value='Code'>Code</option>
                      </select>
                    </span>
                    <span className='icon is-small is-left'>
                      <i className='fas fa-coffee'></i>
                    </span>
                  </p>
                </div>
                <div className='field'>
                  <p className='control'>
                    <button type='submit' className='button is-dark'>
                      Noted!
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

CreateNote.propTypes = {
  createNote: PropTypes.func.isRequired
};

export default connect(
  null,
  { createNote }
)(CreateNote);
