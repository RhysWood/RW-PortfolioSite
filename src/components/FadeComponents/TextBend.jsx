import React, { useState, useEffect } from 'react';

export const TextBend = ({children}) => {
  const [matrix, setMatrix] = useState("matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const matrix = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, ${y / 1000}, 1, 0, 0, 0, 0, 1)`;
      setMatrix(matrix);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ transform: matrix }}>
      {children}
    </div>
  );
};
