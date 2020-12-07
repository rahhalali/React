import  React ,{useEffect, useState} from 'react';
import axios from 'axios'
import {Profile_skills,Profile1,Profile_list,Profile_item,Span,Span_web,Skills,Skills_desc,Bar,Title,Perc_span,Profile_title,Skills_title,Span20,Span30} from "./style.js"


 const Profile = () => {
  const  [ images ,setImages] =useState([])
  
  useEffect (()=>{
    axios.get('js/data.json').then(res => {setImages(res.data.profile)})

  },[])
 
  const PortfolioImages =images.map((imageitem)=>{
  return (
    <Bar key={imageitem.id}>
    <Title>{imageitem.title}</Title>
    <Perc_span>{imageitem.per}</Perc_span>
    
    </Bar>
  )
})
  return (
    <Profile_skills>
    <div class="container">
        <Profile1>
            <Profile_title><Span20>My </Span20>Profile</Profile_title>
            <Profile_list>
                <Profile_item>
                    <Span>Name</Span>
                    Ali Rahhal
                </Profile_item>
                <Profile_item>
                    <Span>Birthday</Span>
                    14/4/1996
                </Profile_item>
                <Profile_item>
                    <Span>Address</Span>
                    Beirut
                </Profile_item>
                <Profile_item>
                    <Span>Phone</Span>
                    70146434
                </Profile_item>
                <Profile_item>
                    <Span>Email</Span>
                    alih.rahhal@hotmail.com
                </Profile_item>
                <Profile_item>
                    <Span>Website</Span>
                    <Span_web>rahalinho.wordpress.com</Span_web>
                </Profile_item>
            </Profile_list>
        </Profile1>
        
        <Skills>
            <Skills_title>Some <Span30>skills</Span30></Skills_title>
            <Skills_desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </Skills_desc>
           {PortfolioImages}
        </Skills>
        
    </div>
</Profile_skills>
  );
}


export default Profile;