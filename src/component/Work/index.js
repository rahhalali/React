import  React, { Component } from 'react';
import axios from'axios'
import {Work1,WorkTitle,Part,PartTitle,Icon,Span,Line,PartDesc} from "./style.js"
 class Work extends Component {
     state ={
      work : []
     }
    
     componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({work:res.data.works})})}

     render(){
       const {work} =this.state;
       const worksList =work.map((item)=>{
        return(
        <Part first={item.id} key={item.id}>
        <Icon className={item.icon_name}></Icon>
        <PartTitle> {item.title}</PartTitle>
        <Line/>
        <PartDesc>{item.body}</PartDesc>
        </Part>
        )

       })
  return (
    <Work1>
    <div className="container">
        <WorkTitle><Span>My</Span> Work</WorkTitle>
        {worksList}
    </div>
</Work1>
  );
}
 }

export default Work;