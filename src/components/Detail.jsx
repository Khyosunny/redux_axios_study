import React from 'react';


export default function Detail({ user, loading }) {
  if (loading) return <p>정보 불러오는 중..</p>
  if (!user) return null;
  return (
    <>
      <h2>회원 상세</h2>
      <h3>{user.name} ({user.username})</h3>
      <p>
        <b>Email: </b>{user.email}</p>
      <p>
        <b>Phone: </b>{user.phone}</p>
    </>
  )
}