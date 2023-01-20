import React from 'react';

export default function Creater() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'orangered',
        backgroundColor: 'rgb(239, 219, 178)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '60%',
          margin: 'auto',
          fontSize: '20px',
          alignItems: 'center',
          height: '40px',
          color: '#866761',
          fontWeight: '600',
        }}
      >
        <span>Designed by &copy; Nijat Niyazov in 2023</span>
        <a
          style={{
            color: '#866761',
            textDecoration: 'none',
            fontStyle: 'italic',
          }}
          href="https://github.com/nijat-niyazov"
          target="_blank"
        >
          github.com/nijat-niyazov
        </a>
      </div>
    </div>
  );
}
