import  React from 'react';
import {HomeSecton,HomeInformation,HomeTitle,HomeInfo,Home_Desc,Span,Home_Btn} from './style.js'

 const Home = ()=> {
  
  return (

    <HomeSecton>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Ali Rahhal</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <Home_Desc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </Home_Desc>
                <Home_Btn>Let's Begin</Home_Btn>
            </HomeInformation>
        </div>
    </HomeSecton>
  );
}


export default Home;