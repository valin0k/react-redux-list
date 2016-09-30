import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserListItem extends Component{
  render() {
    const user = this.props.userData;

    return (
      <li className="user-list-item row">
        <Link  to={'/user/' + user.id}>
          <div className="user-list-item-photo"><img width="35px" src={'src/images/' + user.photo} /></div>
          <div className="user-list-item-name">{user.username}</div>
        </Link>
      </li>
    );
  }
};
