import { GET_USER } from '../actions/index';

const userList = [
  { id: 1, username: 'bot1', photo: 'bot.png' },
  { id: 2, username: 'bot2', photo: 'bot.png' },
  { id: 3, username: 'bot4', photo: 'bot.png' },
  { id: 4, username: 'bot5', photo: 'bot.png' },
];

export default (state = userList, action) => {

  switch (action.type) {
    case GET_USER:

      return state.filter((user) => {
        if (user.id == action.payload) {
          return true;
        }
      });
  }

  return state;
};
