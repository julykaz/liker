import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSuggestionLike } from '../redux/modules/suggestions';
import SuggestionRow from '../components/SuggestionRow';

const SuggestionsTable = ({ suggestions, onSuggestionLikeClick }) => (
  <div className="table">
    <div className="table-head">
      <div className="table-row">
        <div className="table-cell">Suggestion</div>
        <div className="table-cell">Likes</div>
      </div>
    </div>
    <div className="table-body">
      {suggestions.map(suggestion =>
        <SuggestionRow
          key={suggestion.id}
          {...suggestion}
          onClick={() => onSuggestionLikeClick(suggestion.id)}
        />,
      )}
    </div>
  </div>
);

SuggestionsTable.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onSuggestionLikeClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  suggestions: state.suggestions,
});

const mapDispatchToProps = {
  onSuggestionLikeClick: toggleSuggestionLike,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionsTable);
