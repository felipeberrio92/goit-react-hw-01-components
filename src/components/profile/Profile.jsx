import './profile.css';

function Profile(props) {
  return (
    <div className="profile-card">
      <div className="profile-card__desc">
        <img className="avatar" src={props.avatar} alt="avatar" />
        <p className="desc-text">{props.username}</p>
        <p className="desc-text text--secondary">@{props.tag}</p>
        <p className="desc-text text--secondary">{props.location}</p>
      </div>
      <ul className="profile-card__stats m-0">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
