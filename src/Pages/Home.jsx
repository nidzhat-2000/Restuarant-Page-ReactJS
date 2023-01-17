import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ControlledCarousel from '../Components/Slider/Slider';

export default function Home() {
  const ref = useRef();

  // console.log(ref.current.getBoundingClientRect());

  return (
    <div>
      <ControlledCarousel />
      {/* <Link to="/about"> */}
      <h4
        ref={ref}
        className="about"
        style={{
          margin: '1080px auto',
          width: '200px',
          backgroundColor: '#ec7f24',
          textDecoration: 'none',
          color: 'white',
          padding: '20px 40px',
          textAlign: 'center',
          borderRadius: '40px 5px 40px 5px',
        }}
      >
        About Us
      </h4>
      {/* </Link> */}
    </div>
  );
}
