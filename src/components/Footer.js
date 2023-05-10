import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
            <footer>
                <div className="foot">

                <div className="foot--sec--1">
        <div>
  <h5>Address</h5>
  <p>3721 Single Street</p>
        </div>
        <div>
  <h5>Contacts</h5>
  <p>123 456 7890</p>
        </div>
        <div>
  <h5>FAQ</h5>
  <p>Shipping & Return policy</p>
        </div>
  </div>

  <div className="foot--sec--2">
    <div className="llm">
    <h1>Subscribe to our newsletter</h1>
    <p>*</p>
        <input type="text" id="fname" name="fname" placeholder="Your email address" required='true'/>
        <div>
        <button id="btn-3">SUBMIT</button>
        </div>
        </div>
  </div>
  </div>

  <div className="icons--1">
  <Link to="/" className="fa fa-twitter"></Link>
  <Link to="#" className="fa fa-facebook"></Link>
  <Link to="#" className="fa fa-instagram"></Link>
</div>
</footer>
    )
}
