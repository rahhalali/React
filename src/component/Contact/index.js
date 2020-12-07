import  React from 'react';
import {Contact1,ContactTitle,Span,Form,Input,FormInput,InputText,InputEmail,InputSub,InputSubmit,TextArea}  from './style.js'
import Footer from './../Footer'

const Contact = ()=> {
  
  return (
<React.Fragment>
<Contact1>
<div className="container">
    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
    <Form action="">
        <FormInput>
            <InputText type="text" placeholder="Your Name"/>
            <InputEmail type="email" placeholder="Your Email"/>
        </FormInput>
        <InputSub type="text" className="sub" placeholder="Your Subject" />
        <TextArea cols ="30" rows="10" placeholder="Your Message"></TextArea>
        <InputSubmit type="submit" value="Send Message" />
    </Form>
</div>
</Contact1>
<Footer />
</React.Fragment>

  );
}


export default Contact;