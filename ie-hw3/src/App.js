// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import ChangesList from './Components/ChangesList';
import PaginationButtons from './Components/PaginationButtons';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Switch } from 'react-router';
const App = () => {
  const data = [
    // Your data here
  ];

  const itemsPerPage = 20;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <ChangesList data={data.slice(0, itemsPerPage)} />} />
        <Route
          path="/:page"
          render={({ match }) => {
            const page = parseInt(match.params.page, 10);
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            return (
              <>
                <ChangesList data={data.slice(startIndex, endIndex)} />
                <PaginationButtons currentPage={page} totalPages={totalPages} />
              </>
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
