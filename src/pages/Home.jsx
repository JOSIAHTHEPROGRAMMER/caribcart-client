import React from 'react'
import HeroSection from '../components/HeroSection'
import RecentListing from '../components/RecentListing'
import Plans from '../components/Plans'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
       <HeroSection/>
       <RecentListing/>
       <Plans/>
       <CTA/>
    </div>
  )
}

export default Home
