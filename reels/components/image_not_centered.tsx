import React from 'react';
import { Image } from 'antd';

interface Props {
  imageUrl?: string;
  top?: string;
  left?: number
}

const Image_not_cent: React.FC<Props> = ({ imageUrl, top, left}) => (
  <div className='center' style={{
    position: 'absolute',
    top: `${top}px`,
    left: left,
  }}>
    <Image src={imageUrl} preview={false} />
  </div>
);

export default Image_not_cent;
