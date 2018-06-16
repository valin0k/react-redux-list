import React from 'react'
import {Link} from 'react-router'

export default ({userData}) => (
  <li className="user-list-item row">
    <Link  to={`/user/${userData.id}`}>
      <div className="user-list-item-photo">
        <img width="35px" src={'src/images/' + userData.photo} />
      </div>
      <div className="user-list-item-name">{userData.username}</div>
    </Link>
  </li>
)
