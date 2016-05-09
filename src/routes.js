import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    NotFound,
    Pokemon
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/pokemon/:id" component={Pokemon} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
