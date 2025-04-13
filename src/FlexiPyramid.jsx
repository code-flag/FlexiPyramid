
'use client';
  import React, { useRef, useEffect, useState } from 'react';
  import { pyramidThemes } from './themes';
  import './styles/animate.css';
  
  const FlexiPyramid = ({
    maxWidth = 600,
    aspectRatio = 3 / 4,
    segments = [],
    theme = 'default',
    onSegmentClick = () => {},
    onSegmentHover = () => {},
    animate = false,
  }) => {
    const containerRef = useRef(null);
    const [angle, setAngle] = useState(0);
  
    useEffect(() => {
      const updateAngle = () => {
        if (containerRef.current) {
          const { offsetWidth: width, offsetHeight: height } = containerRef.current;
          const halfWidth = width;
          const radians = Math.atan(height / halfWidth);
          const degrees = (radians * 180) / Math.PI;
          setAngle(degrees);
        }
      };
  
      updateAngle();
      window.addEventListener('resize', updateAngle);
      return () => window.removeEventListener('resize', updateAngle);
    }, []);
  
    const segmentClasses = pyramidThemes[theme] || pyramidThemes.default;
  
    return (
      <div className="container my-4">
        <div
          ref={containerRef}
          style={{
            width: '100%',
            maxWidth,
            aspectRatio: `${1 / aspectRatio}`,
            background: 'blue',
            overflow: 'hidden',
            position: 'relative',
            margin: '0 auto',
          }}
          className={animate ? 'pyramid-animate' : ''}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '150%',
              background: 'white',
              transform: `rotate(${angle}deg)`,
              transformOrigin: 'top right',
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '150%',
              background: 'white',
              transform: `rotate(-${angle}deg)`,
              transformOrigin: 'top left',
              zIndex: 2,
            }}
          />
  
          <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
            {(segments.length ? segments : segmentClasses).map((segment, index) => {
              const label = segment.label || `Segment ${index + 1}`;
              const className = segment.className || segment;
              const customStyle = segment.style || {};
              const icon = segment.icon || null;
  
              return (
                <div
                  key={index}
                  className={`d-flex align-items-center justify-content-center fw-bold ${className}`}
                  style={{
                    height: `${100 / (segments.length || segmentClasses.length)}%`,
                    color: className.includes('bg-light') ? '#000' : '#fff',
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    ...customStyle,
                  }}
                  onClick={() => onSegmentClick(index, segment)}
                  onMouseEnter={() => onSegmentHover(index, segment)}
                >
                  {icon && <span className="me-2">{icon}</span>}
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default FlexiPyramid;
  