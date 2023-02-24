import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>This page doesn't exist </h2>
      <h3 style={{ marginTop: '50px', marginBottom: '160px' }}>
        <Link to="/">Go to home page...</Link>
      </h3>
    </div>
  );
};

export default Error;
