import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'Components/Header';
import Welcome from 'Components/Welcome';
import Dashboard from 'Components/Dashboard';
import { AppProvider } from 'State/AppProvider';
import { initialState } from 'Reducers/initialState';
import { mainReducer } from 'Reducers/mainReducer';
import requireAuth from 'Components/requireAuth';

const App = (props) => {
  console.log(mainReducer);
  return (
    <main id="app-root" className="container">
      <AppProvider initialState={initialState} reducer={mainReducer}>
        <Header {...props} />
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
        </Switch>
      </AppProvider>
    </main>
  );
};

export default App;