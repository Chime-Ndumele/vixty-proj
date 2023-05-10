import React, { useState } from "react";
import '../css/Contact.css'

export default function Contact(){
      const [fname, setFname] = useState('')
      const [lname, setLname] = useState('')
      const [email, setEmail] = useState('')
      const [message, setMessage] = useState('')

      const [data, setData] = useState([])

      const submitHandler = function sub(form){
        form.preventDefault()
        console.log('Thank You');

        const newuser = {
          fname:fname,
          lname:lname,
          email:email,
          message:message
        }

        setData([...data, newuser])

        setFname('')
        setLname('')
        setEmail('')
        setMessage('')
      }

    return(
      <div className="contact-form">
        <form onSubmit={submitHandler}>
            <div className="cover-image">
                <img src={require('../images/lamp2.jpg')} alt=''/>
            </div>

        <div className="one">
        <h1>Get in touch</h1>
        <div className="jokl">
        <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required={true} 
          value={fname} onChange={function (e) {setFname(e.target.value) }}
          />

          <div className="vic">
        <label htmlFor="name">Last name</label>
          <input type="text" id="name" placeholder="Your Last name" required={true} 
          value={lname} onChange={function def(e){setLname(e.target.value)}}
          />
          </div>

          <div className="vic">
        <label htmlFor="email">Your email</label>
          <input type="email" id="email" placeholder="Your email address" required={true} 
          value={email} onChange={function def(e){setEmail(e.target.value)}}
          />
          </div>

          <div className="vic">
        <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Enter your message" required={true} 
          value={message} onChange={function def(e){setMessage(e.target.value)}}
          />
          </div>

        <button type="submit" className="btn-contact">Submit</button>
        </div>
        </div>
      </form>
      </div>
    )
}