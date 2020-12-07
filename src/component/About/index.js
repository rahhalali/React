import  React from 'react';
import {Creative,Creative_info,Info_dec,Info_dir,Info_title,Span,Anchor} from'./style.js'
const About = ()=> {
  
  return (
    
    <Creative>
        <div className="container">
            <Creative_info>
                <Info_title><Span>This is</Span> Me</Info_title>
                <Info_dir>Creative Director</Info_dir>
                <Info_dec>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Info_dec>
                <Info_dec>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Info_dec>
            </Creative_info>
        </div>
    </Creative>
  );
}


export default About;