"use client"
import React from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import { MouseFollower } from "react-mouse-follower";
import { UpdateFollower } from 'react-mouse-follower';
import Hero from '@/app/Components/Hero/Hero'
import Services from '@/app/Components/Services/Services'
import Ads from '@/app/Components/Ads/Ads'
import Footer from '@/app/Components/Footer/Footer'
const page = () => {
  return (
    <main className='overflow-x-hidden'>
     
      <MouseFollower />
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero/>
        <Ads/>
        <Services/>
        <Footer/>
      
        
      </UpdateFollower>
      
      
      


    </main>
  )
}

export default page
