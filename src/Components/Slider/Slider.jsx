import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const cart = async () => {
      const res = await fetch('../data/data.json');
      const data = await res.json();
      const { slider } = data;

      console.log(slider);

      if (slider) {
        setSlider(slider);
      }
    };
    cart();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      style={{
        height: '20px',
      }}
    >
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
        {slider?.map((eachSlider, i) => {
          const { description, info, img } = eachSlider;
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
                style={{
                  height: '450px',
                  borderRadius: '0 0 20px 20px',
                }}
              />
              <Carousel.Caption style={{ marginBottom: '20px' }}>
                <h3
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    display: 'inline-block',
                    padding: '12px',
                  }}
                >
                  {description}
                </h3>
                <p
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    // display: 'block',
                    width: '80%',
                    margin: '0 auto',
                    padding: '12px',
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

// render(<ControlledCarousel />);
