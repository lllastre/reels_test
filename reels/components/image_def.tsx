import React from 'react';
import { Image } from 'antd';

interface Props {
  imageUrl?: string;
  top?: string;
  width?: number;
}

const Image_cen: React.FC<Props> = ({ imageUrl, top, width = 0 }) => (
  <div className='center' style={{
    position: 'absolute',
    top: `${top}px`,
    left: '50%',
    marginLeft: -width / 2, 
  }}>
    <Image src={imageUrl} preview={false} />
  </div>
);

export default Image_cen;
