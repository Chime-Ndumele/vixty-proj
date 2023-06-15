import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from "react-use-cart";
import Footer from "./components/Footer";
import Header from './components/Header'
import Home from "./components/Home";
import About from "./components/About";
import Insights from "./components/Insights";
import Store from './components/Store';
import insightData from "./insightData";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SideDrawer from "./components/Nav-drawer/SideDrawer";
import Backdrop from "./components/Nav-drawer/Backdrop";
import Lamps from "./components/Store-components/Lamps";
import Vases from "./components/Store-components/Vases";
import Products from "./components/Store-components/Products";
import Bag from "./components/Bag";
import ProductDetails from "./components/Product-items/ProductDetails";


export default function App(){

  const[sideDrawerOpen, setOpen] = React.useState(0);


const drawerToggleClickHandler = () =>{
  setOpen((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
};

const backdropClickHandler = () =>{
  setOpen(!sideDrawerOpen);
};

let backdrop;

if (sideDrawerOpen) {
  backdrop = <Backdrop click={backdropClickHandler}/>
}

  
  const Item = insightData.map(function(anything){
    return(
      <Insights 
        img={anything.image} 
      />
    )
  })

  // const Item2 = vaseData.map(function(item, index){
  //   return(
  //     <Vases 
  //       img={item.image} 
  //       description={item.description1}
  //       page={`/products/${item.id}`}
  //       price={item.price}
  //       button={item.button}
  //       item={item}
  //       key={index}
  //     />
  //   )
  // })

  // const Item3 = lampData.map(function(item, index){
  //   return(
  //     <Lamps 
  //       img={item.image} 
  //       description={item.description1}
  //       page={`/products/${item.id}`}
  //       price={item.price}
  //       button={item.button}
  //       item={item}
  //       key={index}
  //     />
  //   )
  // })

  // const products = blaData.map(function(item, index){
  //   return(
  //     <Products 
  //       img={item.image} 
  //       description={item.description1}
  //       page={`/products/${item.id}`}
  //       price={item.price}
  //       button={item.button}
  //       item={item}
  //       key={item.id}
        
  //     />
  //   )
  // })






  return(
    <Router>
      <ScrollToTop/>
    <div>
    <CartProvider>
    <div style={{height: '100%'}}>
      <Header drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
    </div>
    <div>
      
        <Routes>
        <Route exact path="/vixty-proj" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/insight" element={(
            <div>
             <div className="insight">
             <h1>Take a look at our insights...</h1>
             <p>Discover the inspirational gallery we gathered from our community.</p>
             </div>

            <div className="flo2">
              {Item}
            </div>
            </div>
          )}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/store" element={<Store/>}>
          <Route exact path="/store" element={<Products/>}/>
            <Route path="lamps" element={<Lamps/>}/>
            <Route path="vases" element={<Vases/>}/>
          </Route>
          <Route exact path="/products/:id" element={<ProductDetails/>}/>

          <Route exact path="/bag" element={<Bag/>}/>
        </Routes>
        
      </div>
    <Footer/>
    </CartProvider>
    </div>
    </Router>
  )
}