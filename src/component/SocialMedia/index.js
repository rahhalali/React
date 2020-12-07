import  React ,{Component} from 'react';
import {Social,SocialDesc,SocialMedia1,Icon,SpanInfo,Span} from'./style.js'
import axios from 'axios'
 class SocialMedia extends Component {
  state={
    social:[]
  }
componentDidMount(){
 axios.get('js/data.json').then(res =>{
   this.setState({
     social:res.data.social
   })
 })

}
   render(){
    const {social}=this.state;
    const SocialList =social.map((item1)=>{
      return(
        <Social item={item1.id} key={item1.id}>
            <Icon  className={item1.icon}></Icon>
            <SocialDesc>
              <Span>{item1.title}</Span>
            <SpanInfo>{item1.body}</SpanInfo>
            </SocialDesc>
        </Social>
        

      )
    })
    return (
        <SocialMedia1>
               {SocialList} 
        
    </SocialMedia1>
      
    )

   }
  
  
}


export default SocialMedia;