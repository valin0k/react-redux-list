import { combineReducers } from 'redux';

import ReducerUsers from './reducer_users';
import ReducerPosts from './reducer_posts';

const rootReducer = combineReducers({
  users: ReducerUsers,
  posts: ReducerPosts,
});

export default rootReducer;

