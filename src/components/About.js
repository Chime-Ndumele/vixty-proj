import React from "react";
import '../css/About.css';

export default function About(){
    return(
        <div className="about-page">
            <div className="about-sec-1">
            <h1>Quality, not quantity</h1>
            <p>We have made quality our habit. It’s not something that we just strive for – we live by this principle every day.</p>
            </div>
            <div className="flo">
                <img src={require('../images/bed-lamp.jpg')} alt=''/>
                <img src={require('../images/ab-vase.jpeg')} alt=''/>
                <img src={require('../images/burner.jpg')} alt=''/>
            </div>
            <div className="about-sec-2">
                <p>
                    Our mission is to provide a trusted and experienced online resource for the retail community.
                     We are committed to providing our members with a wide range of products and services. 
                     This allows you to shop with confidence knowing you are shopping with a trusted brand that knows and understands the marketplace. 
                     We do this by delivering a wide selection of products and services that are tailored to fit your lifestyle.
                </p>
                <p>
                The company is founded by Anna and Michael Hofer, who have a keen interest in children’s fashion.
                 Their aim is to provide the best possible shopping experience for children and their parents and to support the companies that do.
                  Anna and Michael are passionate about children’s fashion and the role it plays in the lives of children.
                   They believe that children can never grow up without fashion, and that fashion should always be available for them.
                </p>
                <p>
                'We love children’s clothing.
                 We believe that every child should have a wonderful wardrobe filled with clothes that will make them feel good.
                  We love that children love clothes, that they want to look good and that they want to be in good clothes.
                   We have created a fashion website where parents can find their children’s clothing, so they can take care of their children’s clothing and enjoy the good times.'
                </p>
                <div className="kol">
                <h2>With love, </h2>
                <p>Anna and Michael</p>
                </div>
            </div>
                
        </div>
    )
}