import React, { Component } from 'react';

class UserPost extends Component {
  constructor(props) {
    super(props);

    this.showPost = this.showPost.bind(this);
    this.hidePost = this.hidePost.bind(this);

    this.state = ({ showFullPost: false });
  }

  showPost() {
    this.setState({ showFullPost: true });
  }

  hidePost() {
    this.setState({ showFullPost: false });
  }

  render() {
    if (this.state.showFullPost) {
      return (
        <li className="post-item" onClick={() => {this.hidePost();}}
          >
          <div className="post-list-item">
            <div className="post-list-item-title">
              {this.props.post.postTitle}
            </div>
            <div className="post-list-item-content">
              {this.props.post.postContent}
            </div>
          </div>
        </li>
      );
    }

    return (
      <li className="post-item-title" onClick={() => {this.showPost();}}
        >
        <div className="post-list-item">
          <div className="post-list-item-title">
            {this.props.post.postTitle}
          </div>
        </div>
      </li>
    );
  }
}

export default UserPost;
