import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './pages/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Men from "./pages/Men"
import Women from"./pages/Women"
import MobileCover from './pages/MobileCover'
import Product from './pages/product'
import Login from './loginn/Login';

import Men2 from './pages/men2'
import Women2 from './pages/women2'
import Protectrouting from './protectrouting/Protectrouting'
import Cart from "./pages/Cart"
import Address from './pages/address';
import Sample from './pages/mobile2';
import Payment from './pages/payment';
import Setting from './pages/UserPage';
import ProductApi from './pages/ProductApi';
import ProductApiDetails from './pages/ProductApiDetails';
import Wishlist from './pages/Wishlist';



const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   
   
   <Routes>

    <Route path="/" element={
      
<Home/>
      
      
      
      }></Route>
    <Route path='/Men' element={<Men/>}/>
    <Route path='/men/:id' element={
      
<Men2/>
      


      }/>
    <Route path='/Women' element={<Women/>}/>
    <Route path='/women/:id' element={<Women2/>}/>
    <Route path='/MobileCover' element={<MobileCover/>}/>
    <Route path="/MobileCover/:id" element={<Sample/>}/>
    <Route path='/Product' element={<Product/>}/>

    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/Setting' element={<Setting/>}></Route>
    <Route path='/productApi' element={<ProductApi/>}></Route>
    <Route path="/ProductApiDetails/:_id" element={<ProductApiDetails/>}/>
    <Route path="/address" element={<Address />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/wishlist" element={<Wishlist />} />

    

   </Routes>
    <Footer />
   
   
   </BrowserRouter>
  )
}

export default App
