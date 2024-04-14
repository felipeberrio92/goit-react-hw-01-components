import './profile.css';
import PropTypes from 'prop-types';
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
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};