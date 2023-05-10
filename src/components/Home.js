import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
        <section className="section--1">
            <div className="shop--1">
            <h1>Shop Together</h1>
            <p>We want your child to fell comfortable, loved and free. Our organic and fairtrade clothing ensures that your baby can play and be happy.</p>
            <Link to='/store'><button id="btn-1">VIEW MORE</button></Link>
            </div>
            <div className="image--1">
            <img src={require('../images/Group2.png')} alt=''/>
            </div>
        </section>

        <section className="section--2">
            <div className="explore">
            <h1>Explore your house needs...</h1>
            <p>From baby accessories to children's clothing, there's something for everyone in our store.</p>
            </div>
            <div className="only-1">
            <div className="flo">
                <img src={require('../images/living1.jpg')} alt=''/>
                <img src={require('../images/kitchen2.jpg')} alt=''/>
                <img src={require('../images/vase.jpg')} alt=''/>
            </div>
            <div className="flo--2">
            <Link to='/store/lamps' className="btnnnn"><button className="btnn">Lamps</button></Link>
            <Link to='/store' className="btnnnn"><button className="btnn">All Products</button></Link>
            <Link to='/store/vases' className="btnnnn"><button className="btnn">Vases</button></Link>
            </div>
            </div>

            <div className="only">
            <div className="flo">
                <img src={require('../images/living1.jpg')} alt=''/>
                <Link to='/store/lamps' className="btnnnn"><button className="btnn">Lamps</button></Link>
                <img src={require('../images/kitchen2.jpg')} alt=''/>
                <Link to='/store' className="btnnnn"><button className="btnn">All Products</button></Link>
                <img src={require('../images/vase.jpg')} alt=''/>
                <Link to='/store/vases' className="btnnnn"><button className="btnn">Vases</button></Link>
            </div>
            </div>

        </section>

        <section className="section--3">
            <div className="discover">
                <h4>OUR STORY</h4>
                <h1>It's all about what you love the most...</h1>
                <p>We are a boutique brand and online store that specialises in all kinds of items for kids. Our goal is to help children grow and feel comfortable in a world full of play, freedom, and fun. We are dedicated to helping children of all ages enjoy the things that they love most. At the end of the day, we are about making the world a better place.</p>
                <Link to='/about'><button id="btn-1">DISCOVER</button></Link>
            </div>

            <div className="image--2">
                <img src={require('../images/living2.jpg')} alt=''/>
            </div>
        </section>

        <section className="section--4">
            <h1>An inside look to our inspirational gallery...</h1>
            <div className="image--3">
                <img src={require('../images/vase3.jpg')} alt=''/>
                <img src={require('../images/vase4.jpg')} alt=''/>
                <img src={require('../images/lamp3.jpg')} alt=''/>
                <img src={require('../images/vase2.jpg')} alt=''/>
            </div>
            <div className="lko">
            <Link to='/insight'><button id="btn-2">DISCOVER MORE</button></Link>
            </div>
        </section>
        </div>
    )
}