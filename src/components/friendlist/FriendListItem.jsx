import React from 'react';

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
