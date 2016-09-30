import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UserList from './containers/user_list';
import UserProfile from './containers/user_profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserList} />
    <Route path="/user/:id" component={UserProfile} />
  </Route>
);
