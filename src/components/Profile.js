import React, { Fragment } from 'react';
import { useAuth0 } from '../utils/react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>Nickname: {user.nickname}</h2>
      <h3>Email: {user.email}</h3>
      <h5>JWT information for further development:</h5>

      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;
