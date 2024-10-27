import React from 'react';
import BackgroundComponent from '../../components/background';

import GridRec from '../../components/grid_for_rec';
import ImageApi from '../../components/api_img';
import Image_cen from '../../components/image_def';
import Image_not_cent from '../../components/image_not_centered';

const Page: React.FC = () => {
  return (
    <div style={{
      position:'absolute',
      width:1728,
      height:3151,
      left:'50%',
      marginLeft:-864,
      borderRadius: 40


    }}>
        <BackgroundComponent/>
        <Image_cen imageUrl='/Logotype.svg' top='64' width={225}/> 
        <Image_cen imageUrl='/Wrapper.svg' top='583' width={736}/> 
        <Image_cen imageUrl='/Wrapper_bt.svg' top='2632' width={736}/> 
        <Image_cen imageUrl='/Partners.svg' top='1778' width={1120.25}/> 
        <Image_cen imageUrl='/Frame 611.svg' top='1955' width={1120}/> 
        <Image_not_cent imageUrl='/Star 3.svg' top='2612' left={518}/> 
        <Image_not_cent imageUrl='/Star 2.svg' top='2736' left={1232}/> 
        <GridRec/>
        <ImageApi apiUrl={'https://r2.mt.ru/r23/photo02E9/20513825918-0/jpg/bp.jpeg'}/>

    <div style = {{position:'absolute', top:983,left:496,width:736}}>
    
      <h2 style={{
        font:'Inter',
        fontSize:'40px',
        fontStyle:'normal',
        fontWeight:700,
        textAlign:'center',
        lineHeight: '48px',
        letterSpacing: '-0.02em',
        
      }}>
        Как это работает?
      </h2>
    </div>
    </div>
  );
};

export default Page;



