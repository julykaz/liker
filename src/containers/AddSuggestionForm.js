import React from 'react';
import { connect } from 'react-redux';
import { addSuggestion } from '../redux/modules/suggestions';

const AddSuggestionForm = ({ dispatch }) => {
  let input; // input reference to reset value

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addSuggestion(input.value));
    input.value = '';
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={onSubmit}>
        <input
          ref={node => {
            input = node
          }}
          className="input"
          type="text"
        />
        <button className="button" type="submit">Add</button>
      </form>
    </div>
  )
};

export default connect()(AddSuggestionForm);
