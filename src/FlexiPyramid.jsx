import React, { useRef, useEffect, useState } from 'react';
import './FlexiPyramid.css';

const FlexiPyramid = ({
  maxWidth = 600,
  aspectRatio = 3 / 4,
  segments = [],
  containerStyle = {},
}) => {
  const containerRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const updateAngle = () => {
      if (containerRef.current) {
        const { offsetWidth: width, offsetHeight: height } = containerRef.current;
        const halfWidth = width / 2;
        const radians = Math.atan(height / halfWidth);
        const degrees = (radians * 180) / Math.PI;
        setAngle(degrees);
      }
    };

    updateAngle();
    window.addEventListener('resize', updateAngle);
    return () => window.removeEventListener('resize', updateAngle);
  }, []);

  return (
    <div className="flexi-pyramid-wrapper" style={{ maxWidth, ...containerStyle }}>
      <div
        ref={containerRef}
        className="flexi-pyramid-container"
        style={{ aspectRatio: `${1 / aspectRatio}` }}
      >
        <div
          className="flexi-pyramid-cut left"
          style={{ transform: `rotate(${angle}deg)` }}
        ></div>
        <div
          className="flexi-pyramid-cut right"
          style={{ transform: `rotate(-${angle}deg)` }}
        ></div>

        <div className="flexi-pyramid-content">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`flexi-segment ${segment.className || ''}`}
              style={{ height: `${100 / segments.length}%` }}
              onClick={segment.onClick}
              onMouseEnter={segment.onHover}
            >
              {segment.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlexiPyramid;
