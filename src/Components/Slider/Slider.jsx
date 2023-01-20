import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useFetch from '../../utils/useFetch';

export default function ControlledCarousel({ data }) {
  // Slider issues ⤵
  const [index, setIndex] = useState(0);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        nextIcon={
          <span
            aria-hidden="true"
            className="glyphicon glyphicon-chevron-right"
            style={{
              backgroundColor: 'red',
            }}
          ></span>
        }
        prevIcon={
          <span
            aria-hidden="true"
            className="glyphicon glyphicon-chevron-right"
            style={{
              backgroundColor: 'red',
            }}
          ></span>
        }
        bsPrefix="carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {data?.map((eachSlider, i) => {
          const { description, info, img } = eachSlider;
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
                style={{
                  height: '425px',
                  borderRadius: '0 0 20px 20px',
                  filter: 'brightness(80%)',
                }}
              />
              <Carousel.Caption style={{ marginBottom: '20px' }}>
                <h3
                  style={{
                    color: '#5a5a5a',
                    backgroundColor: 'rgba(240, 240, 240, 0.649)',
                    display: 'inline-block',
                    padding: '12px',
                    borderRadius: '20px',
                  }}
                >
                  {description}
                </h3>
                <p
                  style={{
                    color: 'black',
                    backgroundColor: 'rgba(240, 240, 240, 0.649)',
                    width: '80%',
                    margin: '0 auto',
                    padding: '12px',
                    borderRadius: '20px',
                  }}
                >
                  {info}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
