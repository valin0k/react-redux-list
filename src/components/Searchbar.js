import React from 'react'

export default (props) => (
  <div className="user-searchbar">
    <input type="text" placeholder="Поиск" onChange={props.handleInputChange} />
  </div>
)
