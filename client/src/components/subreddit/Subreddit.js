import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Subreddit = ({ images, setRefChange }) => {
  const checker = useRef();

  const refElement = useCallback((node) => {
    if (checker.current) {
      checker.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    checker.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setRefChange(true);
      } else {
        setRefChange(false);
      }
    }, options);
    if (node) {
      checker.current.observe(node);
    }
  }, []);
  return (
    <div className='subreddit flex_column'>
      {images.length > 0 &&
        images.map((element, index) => (
          <div key={index}>
            {index % 7 === 0 ? (
              <div key={index} ref={refElement}>
                <Card element={element} count={index} />
              </div>
            ) : (
              <div key={index}>
                <Card element={element} count={index} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

Subreddit.propTypes = {};

export default Subreddit;
