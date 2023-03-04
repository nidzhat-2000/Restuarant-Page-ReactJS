import React from 'react';
import useTitleSetter from '../../utils/pageTitleSetter';

export default function OurTeam() {
  useTitleSetter('Team');

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
}
