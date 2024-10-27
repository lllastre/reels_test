'use client'

import React, { useState, useEffect } from 'react';

const ImageApi = ({ apiUrl }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imageSrc) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
        height:'20%',
        width:200,
        position: 'absolute',
        top: 250,
        left:'50%',
        marginLeft:-100,
        boxSizing: 'content-box',
       
    }}>
        <img 
        src={imageSrc} 
        
        alt="Loaded image" 
        style={{ maxWidth: '100%', maxHeight: 'auto' }}
        />
    </div>
  );
};

export default ImageApi;
