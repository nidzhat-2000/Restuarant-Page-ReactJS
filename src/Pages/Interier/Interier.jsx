import React from 'react';
import useTitleSetter from '../../utils/pageTitleSetter';

const Interier = () => {
  useTitleSetter('Interier');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '284px',
        width: '100%',
        paddingTop: '100px',
      }}
    >
      <h2>Not Ready yet :) </h2>
    </div>
  );
};

export default Interier;
