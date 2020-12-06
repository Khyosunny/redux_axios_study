import React, { useState } from 'react';
import DetailContainer from '../containers/DetailContainer';

export default function Main({ users, loading }) {
  const [userId, setUserId] = useState(null);

  if (loading) return <p>로딩 중...</p>
  if (!users) return null;
  return (
    <div>
      <h1>회원목록</h1>
      <ul>
        {
          users.map((user) => (
            <li
              key={user.id}
              style={{ cursor: 'pointer'}}
              onClick={() => setUserId(user.id)}
            >{user.name}
            </li>
          ))
        }
      </ul>
      <hr />
      { userId && <DetailContainer id={userId} />}
    </div>
  );
}