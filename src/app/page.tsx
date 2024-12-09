// import React from 'react'
// import Navbar from '@/Components/Navbar'
// import Hero from '@/Components/Hero'


// const page = () => {
//   return (
//     <div>
//     <Navbar/>
//     < Hero/>
      
//     </div>
//   )
// }

 
 import Footer from "@/Components/Footer";
 import Header from "@/Components/Header";
 import Hero from "@/Components/Hero";
import Products from "@/Components/Prouducts";
import Slides from "@/Components/Slides";
import SubHero from "@/Components/Subhero";




export default function Home(){
  return (
    <div>
      
    
   <Header/> 
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
     <Footer/> 
     </div>
     
            

     
    
  )
} ;

