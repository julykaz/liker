# Liker

Real-time web application, where users can share the list of their own suggestions and vote for best one.  

### UI Components

- **Suggestions table**

    List of current suggestions, where each suggestion row contains votes counter.

    Clicking on votes counter user adds or removes his own vote for current suggestion

    User can vote for single suggestion only once

    When user adds his vote for suggestions, "like" symbol appears near the counter

- **Suggestion form**

    Simple form, containing text input and submit button, where user can add his own suggestions


### Tasks

Build simple UI, where user can add, preview or vote for his own suggestions (like a todo list).
No synchronization between users is required at the moment

## Implementation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) to speed things up.

I've used Redux for state management though it's an overhead for project like this.
To simplify things - Redux actions and reducers were bundled together based on [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux) proposal.

Components could be split up into smaller and more generic ones, but hopefully code is readable enough as it is now.

In real world application I would also introduce some CSS methodology like BEM and use SCSS or some more advanced post-css modules, but I kept it simple for now.

### Running the project

1. Install dependencies by running `yarn` or `npm install`.
2. Start the application in development mode by running `yarn start` or `npm start`.

To run tests - `yarn test` or `npm start`.  
Production build - `yarn build` or `npm run build`.
