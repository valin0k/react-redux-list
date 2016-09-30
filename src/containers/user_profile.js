import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { getUserPosts } from '../actions/index';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.props.getUserPosts(this.props.params.id);

    const profileData = this.props.users.filter((user) => {
      if (user.id == this.props.params.id) {
        return true;
      }
    });

    this.state = ({ profileData: profileData[0] });

  }

  postList() {
    return this.props.posts.map((post) => {
      return (
        <li className="post-item-title" key={post.postTitle}>
          {post.postTitle}
        </li>
      );
    });
  }

  render() {
    if (!this.props.posts) {
      return (
        <div>
          Загрузка...
        </div>
      );
    }

    return (
      <div className="user-profile">
        <Link className="user-profile-link" to="/">К списку пользователей</Link>
        <div className="user-profile-photo"><img src={'../src/images/' + this.state.profileData.photo} /></div>
        <div className="user-profile-name">{this.state.profileData.username}</div>
        <div className="user-profile-posts">Статьи пользователя</div>
        {this.postList()}
      </div>
    );
  }
}

function mapStateToProps(posts) {
  return { posts: posts.posts, users: posts.users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserPosts }, dispatch);
}

//export default UserProfile;
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
