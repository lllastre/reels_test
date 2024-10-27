import React from 'react';

const BackgroundComponent: React.FC = () => {
  return (

    <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height:3151,
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'white',
        zIndex: -1
    }}>
    <div style={{
      position:'fixed',
      top: 0,
      left: '50%',
      right: 0,
      bottom: 0,
      marginLeft: '-864px',
      width: '1728px',
      backgroundSize: 'contain',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'transparent',
      outline: '20px solid black',
      zIndex: 5,
      borderRadius: '40px'
    }}>
      </div>


    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("Frame_628.svg")',
      backgroundSize: 'contain',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      zIndex: -1
    }}>
    </div>
    <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("Frame 601.svg")',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        zIndex: -1
      }}>
    </div>
    <div style={{
        position: 'absolute',
        top: 0 ,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        backgroundImage: 'url("Frame 628_with_pick.svg")',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
    }}>
    </div>
      </div>
      
  );
};

export default BackgroundComponent;