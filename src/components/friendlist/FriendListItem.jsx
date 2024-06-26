import React from 'react';
import PropTypes from 'prop-types';
export default function FriendListItem(props) {
  return (
    <li className="friend-item">
      {props.friend.isOnline ? (
        <span className="status status--online"></span>
      ) : (
        <span className="status status--offline"></span>
      )}
      <img
        src={props.friend.avatar}
        alt={`avatar ${props.friend.name}`}
        width="48"
      />
      <p className="name">{props.friend.name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};