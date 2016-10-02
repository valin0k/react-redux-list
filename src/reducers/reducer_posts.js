import { GET_POSTS } from '../actions/index';

const posts = [
  { userId: 1, postId: 1, postTitle: 'React and Redux', postContent: 'Redux is incredibly simple' },
  { userId: 1, postId: 2, postTitle: 'Javascript', postContent: 'Javascript is incredibly simple' },
  { userId: 3, postId: 3, postTitle: 'Harry Potter', postContent: 'Potter is incredibly simple' },
];

export default (state = null, action) => {
  switch (action.type) {
    case GET_POSTS:
      return posts.filter((post) => {
        if (post.userId == action.payload) {
          return true;
        }
      });
  }

  return state;
};
