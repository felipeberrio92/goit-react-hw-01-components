import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';

import { USER, TRANSACTIONS, FRIENDS, DATA } from '../static/index';
import './app.css';
import Transactions from './transactions/Transactions';

export const App = () => {
  return (
    <div className="app">
      <Profile
        username={USER.username}
        tag={USER.tag}
        location={USER.location}
        avatar={USER.avatar}
        stats={USER.stats}
      />
      <Statistics title="Upload Stats" stats={DATA} />
      <FriendList friends={FRIENDS} />
      <Transactions items={TRANSACTIONS} />
    </div>
  );
};
