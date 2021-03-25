import React, { useState, useEffect } from 'react';
import api from '../api/jsonplaceholder';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await api.get('users/1');
      setProfile(response.data);
    }, 5000)
  }, [])

  return (
    <div className="user">
      <h2>User Details</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonProfile theme="dark" />}
    </div>
  );
}

export default User;