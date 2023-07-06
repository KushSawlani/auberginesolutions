import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toJpeg } from 'html-to-image';


import './styles.css';

const UserDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserDetail();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const downloadUserDetail = () => {
    const userCard = document.getElementById('userCard');

    toJpeg(userCard)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'user_detail.jpg';
        link.click();
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  return (
    <div id="userDetail">
      <div id="userCard" className="card">
        <img src={user.avatar} alt="User Avatar" className="userImage" />
        <div className="details">
          <div className="name">{`${user.first_name} ${user.last_name}`}</div>
          <div className="email">{user.email}</div>
        </div>
      </div>
      <button className="button" onClick={downloadUserDetail}>Download</button>
      <button className="button" onClick={() => navigate('/list')}>Back to List</button>
    </div>
  );
};

export default UserDetailPage;
