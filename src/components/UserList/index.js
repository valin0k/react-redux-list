import React, {Component} from 'react'
import {connect} from 'react-redux'

import UserListItem from '../../components/UserListItem'
import UserSearchbar from '../../components/Searchbar'

class UserList extends Component {
  state = {
    searchbar: ''
  }

  handleInputChange = (e) => this.setState({searchbar: e.target.value})

  render() {
    const {users} = this.props
    const {searchbar} = this.state
    return (
      <ul className="user-list table-sm table-hover">
        <UserSearchbar handleInputChange={this.handleInputChange}  />
        <div className="user-profile-posts">Список пользователей</div>
        {users
          .filter(user => user.username.includes(searchbar.toLowerCase()))
          .map((user) => <UserListItem key={user.id} userData={user} />)}
      </ul>
    )
  }
}

export default connect(({users}) => ({
  users
}))(UserList)
