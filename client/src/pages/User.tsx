import React from 'react';
import { useParams } from 'react-router-dom';
import Playlists from '../components/playlists/Playlists';

const User = () => {
  const { token } = useParams();
  if (token) {
    return (
      <div className='App-header'>
        {/* <Card token={token}></Card> */}
        <div>
          <Playlists token={token}></Playlists>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>token not defined</p>
      </div>
    );
  }
};

export default User;
