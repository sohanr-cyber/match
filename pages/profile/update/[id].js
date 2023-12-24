import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Personal from '@/components/Profile/Personal'
import Education from '@/components/Profile/Update/Education'
import Physical from '@/components/Profile/Physical'
import Religion from '@/components/Profile/Update/Religion'
import Address from '@/components/Profile/Address'
import Basic from '@/components/Profile/Update/Basic'
import Family from '@/components/Profile/Family'
import Expectation from '@/components/Profile/Expectation'

const Update = () => {
  return (
    <>
      <Navbar />
      <Basic />
      <Personal />
      <Education />
      <Physical />

      <Religion />
      <Address />
      <Family />
      <Expectation />
      <Footer />
    </>
  )
}

export default Update
