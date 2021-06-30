import React, { useState } from 'react';
// import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Board from 'react-trello';
export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        // style: { backgroundColor: 'red' },
        cards: [
          {
            id: 'Card1',
            title: 'Write Blog',
            description: 'Can AI make memes',
            label: '30 mins',
            draggable: false,
          },
          {
            id: 'Card2',
            title: 'Pay Rent',
            description: 'Transfer via NEFT',
            label: '5 mins',
            metadata: { sha: 'be312a1' },
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: [],
      },
    ],
  };
  return (
    <div className='homepage'>
      <Board
        data={data}
        style={{
          backgroundColor: '#1965e0',
          width: '100vw',
          margin: '0px !important',
          padding: '0px !important',
        }}
      />
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
    </div>
  );
}
