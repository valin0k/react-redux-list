import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import UserPost from '../UserPost'

const UserProfile = ({posts, user}) => {
  if (!posts) return <div>Загрузка...</div>

  return (
    <div className="user-profile">
      <Link className="user-profile-link" to="/">К списку пользователей</Link>
      <div className="user-profile-photo"><img src={'../src/images/' + user.photo} /></div>
      <div className="user-profile-name">{user.username}</div>
      <div className="user-profile-posts">Статьи пользователя</div>
      {posts.map((post) => <UserPost key={post.postId} post={post} />)}
    </div>
  )
}

UserProfile.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.object
}

export default connect(({posts, users}, ownProps) => ({
  posts: posts.filter(post => post.userId === +ownProps.params.id),
  user: users.find(user => user.id === +ownProps.params.id)
}))(UserProfile)
