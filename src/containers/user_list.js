import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListItem from '../components/user_list_item';

class UserList extends Component {
  showUserList() {
    return this.props.users.map((user) => {
      return (
        <UserListItem key={user.id} userData={user} />
      );
    });
  }

  render() {
    console.dir(this.props.users);
    return (
      <ul className="user-list table-sm table-hover">
        <div className="user-profile-posts">Список пользователей</div>
        {this.showUserList()}
      </ul>
    );
  }
}

function mapStateToProps(users) {
  return { users: users.users };
}

export default connect(mapStateToProps)(UserList);
