import React from "react";
import { Carousel } from 'react-bootstrap';
import '../bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import '../css/Store.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom"

export default function Store(){
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


    return(
      <div>
      <div className="carousel-con1">
        <Carousel fade className="dex">
        <Carousel.Item interval={1000}>
          <img
            className="hi"
            src={require('../images/lom.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className='lmo'>
          <img
            className="hi"
            src={require('../images/yuh.jpg')}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="hi"
            src={require('../images/vv.jpg')}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
            <div className="pop-pro">
            <h1>POPULAR PRODUCTS</h1>
          </div>
          <div className="pop-pro2">
          <h6>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</h6>
          </div>


          <header className="nav--2">
            <div className="nav--items2">
            <li className={splitLocation[2] === "/store" ? "active" : ""}>
              <Link to="/store" className='text-link2'>ALL PRODUCTS</Link>
              </li>
              <li className={splitLocation[2] === "lamps" ? "active" : ""}>
              <Link to="lamps" className='text-link2'>LAMPS</Link>
              </li>
              <li className={splitLocation[2] === "vases" ? "active" : ""}>
              <Link to='vases' className='text-link2'>VASES</Link>
              </li>
             
    </div>
        </header>
   
        <Outlet />

          </div>
    )
}