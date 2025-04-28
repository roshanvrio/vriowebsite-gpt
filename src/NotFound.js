import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div
      style={{
        height: '70vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center', // Horizontally center content
        backgroundColor: '#1a1a1a', // Dark background
        color: '#ffffff', // White text
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          color: '#ffcc00', // Highlighted text
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </p>
      <p
        style={{
          marginBottom: '2rem',
          fontStyle: 'italic',
        }}
      >
        No match found 
      </p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#1a1a1a',
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#e6b800')} // Hover effect
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ffcc00')} // Reset hover effect
        >
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
