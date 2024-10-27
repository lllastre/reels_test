import React from 'react';
import { Image } from 'antd';

interface Props {
    imageUrl?: string;
    wrapperUrl?: string
  }
  
  const Rec_with_pic: React.FC<Props> = ({ imageUrl, wrapperUrl }) => (
    <div style={{
      position: 'absolute',
      top: 1066,
      width: '352px',
      height: '540px',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 60px 60px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      overflow: 'hidden',
      borderWidth: '1px',
      borderColor: 'rgba(0, 0, 0, 0.05)',
      borderStyle: 'solid',
      zIndex:-1
     
    }}>
        <img src={imageUrl} alt="" />
        <img src={wrapperUrl} alt="" />
      
      <div style={{
        position: 'absolute',
         backgroundImage: `url("${imageUrl}")`,
         backgroundSize: '312px 312px',
         backgroundPosition: '20px 20px',
         backgroundRepeat: 'no-repeat',
      }}>
        
      </div>
    </div>
  );
  
  
  export default Rec_with_pic;

  /*.container {
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
  padding: 20px; }*/