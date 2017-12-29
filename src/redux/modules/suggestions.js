// Actions
export const ADD_SUGGESTION = 'liker/suggestions/ADD_SUGGESTION';
export const TOGGLE_SUGGESTION_LIKE = 'liker/suggestions/TOGGLE_SUGGESTION_LIKE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_SUGGESTION:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          likes: 0,
          liked: false,
        },
      ];
    case TOGGLE_SUGGESTION_LIKE:
      return state.map(suggestion =>
        (suggestion.id === action.id) ?
          {
            ...suggestion,
            likes: suggestion.liked ? suggestion.likes - 1 : suggestion.likes + 1,
            liked: !suggestion.liked,
          } : suggestion,
      );
    default:
      return state;
  }
};

// Action Creators
let nextSuggestionId = 0;
export const addSuggestion = (text) => ({
  type: ADD_SUGGESTION,
  id: nextSuggestionId++,
  text,
});

export const toggleSuggestionLike = (id) => ({
  type: TOGGLE_SUGGESTION_LIKE,
  id,
});