import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistic/Statistics';
import data from './Statistic/data.json';
import { Transactions } from './Transactions/Transactions';
import transactions from './Transactions/transactionsHistory.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};