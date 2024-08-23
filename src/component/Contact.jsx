import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import "./Contact.css";
import { useState } from 'react';
import {motion} from "framer-motion";
export default function Contact(){
  let [inputs,setInputs]=useState({

    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",

  })
  let [isOpne,setIsOpen]=useState(false);

    const handleInput = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      console.log(inputs)
    };
      
    const handleSubmit=()=>{
      console.log("......")
      if(inputs.name && inputs.email && inputs.phone && inputs.subject && inputs.message){
        console.log("inputs are not undefined");
        setIsOpen(true);
        setInputs({
          name: "",
          email: "",
          phone: "",
          subject: "",
        });
      }
     
    }
    return(<>
           {
            isOpne ? ( <div className="profile-unique-1">
            <div className="first-container-unique-1">
              <div className="first-div-unique-1">
               <div className="title-info">
                Message was Sent
                </div>
                </div>
                </div>
                </div>):(
          
        <div className="profile-unique-1">
      <div className="first-container-unique-1">
        <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="first-div-unique-1">
         <div className="title-info">
            <p className='contact-head'>Contact Info</p>
            <p>Get In Touch</p>
            <p>Don’t be afraid man! Just
             say hello...</p>
         </div>
         <div className="contact-icon">
         <i class="fa-solid fa-phone"></i>
         <p className='p-n'>+917869013745</p>
         </div>
         <div className="contact-icon">
         <i class="fa-regular fa-envelope"></i>
         <p className='p-n' type='email'>mdsaadnezami<br/>@gmail.com</p>
         </div>
         <div className="contact-icon">
         <i class="fa-solid fa-location-crosshairs"></i>
         <p className='p-n'>Baikuntpur,<br/>Chrirmiri</p>
         </div>
        </motion.div>
      </div>

      <div className="sec-container-unique-1">
        <div className="sec-inner-unique-1">
          <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="product-div-unique-1">
        <div className="input-div">
            <b><label htmlFor='name'>Name</label></b>
            &nbsp;   &nbsp;   &nbsp; 
            <input value={inputs.name} onChange={(e)=>handleInput(e)} name="name" className='input' type='text' id="name" placeholder='Enter Name...' />
            &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   
            <b><label htmlFor='email'>Email</label></b>
            &nbsp;   &nbsp;   &nbsp; 
            <input value={inputs.email}  onChange={(e)=>handleInput(e)} name="email" className='input' type='email' id='email' placeholder='Enter Email...'/>
        </div>

        <div className="input-div input-div-2">
            <b><label htmlFor='phone'>Phone</label></b>
            &nbsp;   &nbsp;   &nbsp;  
            <input value={inputs.phone}  onChange={(e)=>handleInput(e)} name="phone" className='input' type='number' id="phone" placeholder='Enter Phone...' />
            &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   
            <b><label htmlFor='subject'>Subject</label></b>
            &nbsp;   &nbsp;   &nbsp; 
            <input value={inputs.subject}  onChange={(e)=>handleInput(e)} name="subject" className='input' type='text' id='subject' placeholder='Enter Subject...'/>
        </div>
           <b><p className='message'>Message</p></b>
          <textarea name='message' value={inputs.message} onChange={(e)=>handleInput(e)}  className='text-area' type="text" cols={140} rows={15}></textarea>
          <br/>
          <br/>
          <Button onClick={()=>handleSubmit()} className='mui-btn' variant='contained'>Submit Now</Button>
          </motion.div>

         
        </div>
        
      </div>
    </div>)
     }
    </>
    )
}