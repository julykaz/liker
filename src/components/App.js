import React from 'react';
import AddSuggestionForm from '../containers/AddSuggestionForm';
import SuggestionsTable from '../containers/SuggestionsTable';

const App = () => (
  <div className="liker">
    <SuggestionsTable />
    <AddSuggestionForm />
  </div>
);

export default App;
