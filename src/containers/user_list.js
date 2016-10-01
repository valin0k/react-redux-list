import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserListItem from '../components/user_list_item';
import UserSearchbar from '../components/user_searchbar';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      sortedUsers: this.props.users,
      allUsers: this.props.users,
    });

    this.onInputChange = this.onInputChange.bind(this);
  }

  showUserList() {
    return this.state.sortedUsers.map((user) => {
      return (
        <UserListItem key={user.id} userData={user} />
      );
    });
  }

  onInputChange(value) {
    let sortedUsers = this.state.allUsers.filter((elem) => {
      if (elem.username.toLowerCase().indexOf(value) !== -1) {
        return true;
      }
    });

    this.setState({ sortedUsers: sortedUsers });
  }

  render() {

    return (
      <ul className="user-list table-sm table-hover">
        <UserSearchbar searchValue={this.onInputChange}  />
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
