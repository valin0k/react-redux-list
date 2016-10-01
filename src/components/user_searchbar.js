import React, { Component } from 'react';

class UserSearchbar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.searchValue(event.target.value);
  }

  render() {
    return (

      <div className="user-searchbar">
        <input type="text" placeholder="Поиск" onChange={this.onInputChange} />
      </div>
    );
  }
}

export default UserSearchbar;
