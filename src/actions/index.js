export const GET_POSTS = 'GET_POSTS';
export const GET_USER = 'GET_USER';

export function getUserPosts(userId) {
  return {
    type: GET_POSTS,
    payload: userId,
  };
}

export function getUserProfile(userId) {
  return {
    type: GET_USER,
    payload: userId,
  };
}
