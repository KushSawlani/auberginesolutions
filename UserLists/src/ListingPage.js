import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ListingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserList();
  }, []);

  const displayUserCards = () => {
    return users.map(user => (
      <Link key={user.id} to={`/detail/${user.id}`} className="card">
        <img src={user.avatar} alt="User Avatar" />
        <div className="details">
          <div className="name">{`${user.first_name} ${user.last_name}`}</div>
          <div className="email">{user.email}</div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="userList">
      {displayUserCards()}
    </div>
  );
};

export default ListingPage;
