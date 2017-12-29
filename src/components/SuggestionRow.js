import React from 'react';
import PropTypes from 'prop-types';

const SuggestionRow = ({ onClick, liked, likes, text }) => (
  <div className={`table-row${liked ? ' liked' : ''}`}>
    <div className="table-cell">{text}</div>
    <div
      className="table-cell"
      onClick={onClick}
    >
      <span>{likes}</span>
      <i className={liked ? 'icon-like' : ''}></i>
    </div>
  </div>
);

SuggestionRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default SuggestionRow;
