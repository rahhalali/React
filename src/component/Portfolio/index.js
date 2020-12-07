import  React ,{useEffect, useState} from 'react';
import {portfolioSection,PortfolioItem,PortfolioTitle,PortfolioList,Span,Overlay,OverlaySpan,ImageWrapper,Image} from './style.js'
import axios from 'axios'
 const Portfolio = ()=> {
  const  [ images ,setImages] =useState([])
  
  useEffect (()=>{
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})

  },[])
 
  const PortfolioImages =images.map((imageitem)=>{
return(

  <ImageWrapper ket ={imageitem.id}>
  <Image src={imageitem.image} alt="" />
  <Overlay>
      <OverlaySpan>
          Show Image
      </OverlaySpan>
  </Overlay>
</ImageWrapper>

)

  })

  return (
  <portfolioSection>
  <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
  <PortfolioList>
  <PortfolioItem active>All</PortfolioItem>
  <PortfolioItem>HTML</PortfolioItem>
  <PortfolioItem>Photoshop</PortfolioItem>
  <PortfolioItem>Wordpress</PortfolioItem>
  <PortfolioItem>Mobile</PortfolioItem>
  </PortfolioList>
    
       <div class="box">
        {PortfolioImages}
        </div>

</portfolioSection>
  );
}


export default Portfolio;