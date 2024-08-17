import React from 'react';
import '../App.css';
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
const Contact = () =>{
return(
 <>
 <div className="contact">
   <div className="contact-col">
     <h3>Send us a message</h3>
     <p>The contact form on the Study Corner Coaching website allows students and parents to easily reach out with inquiries or feedback. It's a simple and efficient way to connect with our team for personalized assistance and information.</p>

     <p><MdMarkEmailUnread className="gmail-icon"/>studycorner@gmail.com</p>
     <p><IoCallSharp className="phone-icon"/>+123 456 789</p>
     <p><IoLocation className="location-icon"/>Baldia town karachi, near awami bakery</p>

   </div>
   <div className="contact-col form">
     <form action="">
       <label >Your Name</label>
       <input type="text" name="name" placeholder="Enter your name" required/>
       <label>Phone Number</label>
       <input type="no" name="phone" placeholder="Enter your mobile number" required/>
         <label>Write your message here</label>
         <textarea name="message" rows="6" placeholder="Enter your message"></textarea>
         <button type="submit" className="contact-form-btn">Submit</button>
     </form>
   </div>
 </div>
 
 </>
)
}
export default Contact