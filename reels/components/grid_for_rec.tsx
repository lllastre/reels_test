import React from 'react';
import Rec_with_pic from './rec_with_pic';

const GridRec: React.FC = () => (
<div>
    <div style={{
        position:'absolute',
        left:304
    }}>
    <Rec_with_pic imageUrl='Frame 639.svg' wrapperUrl = 'Wrapper(3).svg'/>
    </div>
    <div style={{
        position:'absolute',
        left:688
    }}>
    <Rec_with_pic imageUrl='Frame 639(1).svg' wrapperUrl = 'Wrapper(4).svg'/>
    </div>
    <div style={{
        position:'absolute',
        left:1072
    }}>
    <Rec_with_pic imageUrl='Frame 639(2).svg' wrapperUrl = 'Wrapper(5).svg'/>
    </div>
  
</div>
);

export default GridRec;