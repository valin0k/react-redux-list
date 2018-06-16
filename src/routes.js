import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserList} />
    <Route path="/user/:id" component={UserProfile} />
  </Route>
);
