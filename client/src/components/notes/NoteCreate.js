import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNote } from "../../actions/note";

const NoteCreate = ({ addNote }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    category: ""
  });

  const { title, body, category } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Create a new note</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addNote({ title, body, category });
          setFormData("");
        }}>
        <input
          name='title'
          cols='30'
          rows='5'
          placeholder='Note title'
          value={title}
          onChange={e => onChange(e)}
          required
        />
        <textarea
          name='body'
          cols='30'
          rows='5'
          placeholder='Create a note'
          value={body}
          onChange={e => onChange(e)}
          required
        />
        <input
          name='category'
          cols='30'
          rows='5'
          placeholder='Note category'
          value={category}
          onChange={e => onChange(e)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

NoteCreate.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default connect(
  null,
  { addNote }
)(NoteCreate);
