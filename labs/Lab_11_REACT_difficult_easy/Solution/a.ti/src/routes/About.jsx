import React from 'react';
import { useParams } from 'react-router-dom';

function About({ users }) {
  const { id } = useParams();

  const user = users.find((u) => u.id === id);

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>Birth_year: {user.birth_year}</p>
          <p>ID: {user.id}</p>
        </>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
}

export default About;
