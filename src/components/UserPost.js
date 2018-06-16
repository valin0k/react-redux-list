import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserPost extends Component {
  static propTypes = {
    post: PropTypes.object
  }

  state = {isOpen: false}

  togglePost = () => this.setState((state) => ({isOpen: !state.isOpen}))

  render() {
    const {post} = this.props
    const {isOpen} = this.state

    return (
      <li className="post-item" onClick={this.togglePost}>
        <div className="post-list-item">
          <div className="post-list-item-title">
            {post.postTitle}
          </div>
          {isOpen && (
            <div className="post-list-item-content">
              {post.postContent}
            </div>
          )}
        </div>
      </li>
    )
  }
}

export default UserPost
