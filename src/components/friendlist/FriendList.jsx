import FriendListItem from './FriendListItem';
import './friendList.css';
export default function FriendList(props) {
  return (
    <div>
      <ul className="friends-list m-0 p-0">
        {props.friends.map((friend, index) => (
          <FriendListItem friend={friend} key={index} />
        ))}
      </ul>
    </div>
  );
}
