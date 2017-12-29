import suggestions,
{
  ADD_SUGGESTION,
  TOGGLE_SUGGESTION_LIKE,
  addSuggestion, toggleSuggestionLike,
} from './suggestions';

describe('suggestions reducer', () => {
  it('should handle initial state', () => {
    expect(
      suggestions(undefined, {}),
    ).toEqual([])
  });

  it('should handle ADD_SUGGESTION', () => {
    expect(
      suggestions([], {
        type: ADD_SUGGESTION,
        text: 'Run the tests',
        id: 0,
        likes: 0,
        liked: false,
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        liked: false,
        likes: 0,
        id: 0,
      },
    ]);

    expect(
      suggestions([
        {
          text: 'Run the tests',
          likes: 0,
          liked: false,
          id: 0,
        },
      ], {
        type: ADD_SUGGESTION,
        text: 'Use Redux',
        likes: 0,
        liked: false,
        id: 1,
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        likes: 0,
        liked: false,
        id: 0,
      }, {
        text: 'Use Redux',
        likes: 0,
        liked: false,
        id: 1,
      },
    ]);

    expect(
      suggestions([
        {
          text: 'Run the tests',
          likes: 0,
          liked: false,
          id: 0,
        }, {
          text: 'Use Redux',
          likes: 0,
          liked: false,
          id: 1,
        },
      ], {
        type: ADD_SUGGESTION,
        text: 'Fix the tests',
        id: 2,
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        likes: 0,
        liked: false,
        id: 0,
      }, {
        text: 'Use Redux',
        likes: 0,
        liked: false,
        id: 1,
      }, {
        text: 'Fix the tests',
        likes: 0,
        liked: false,
        id: 2,
      },
    ])
  });

  it('should handle TOGGLE_SUGGESTION_LIKE', () => {
    expect(
      suggestions([
        {
          text: 'Run the tests',
          likes: 0,
          liked: false,
          id: 1,
        }, {
          text: 'Use Redux',
          likes: 0,
          liked: false,
          id: 0,
        },
      ], {
        type: TOGGLE_SUGGESTION_LIKE,
        id: 1,
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        likes: 1,
        liked: true,
        id: 1,
      }, {
        text: 'Use Redux',
        likes: 0,
        liked: false,
        id: 0,
      },
    ])
  });
});

describe('suggestion actions', () => {
  it('addSuggestion should create ADD_SUGGESTION action', () => {
    expect(addSuggestion('Use Redux')).toEqual({
      type: ADD_SUGGESTION,
      id: 0,
      text: 'Use Redux',
    })
  });

  it('toggleSuggestionLike should create TOGGLE_SUGGESTION_LIKE action', () => {
    expect(toggleSuggestionLike(1)).toEqual({
      type: TOGGLE_SUGGESTION_LIKE,
      id: 1,
    })
  });
});
