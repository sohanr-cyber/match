import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Basic from '@/components/Profile/Update/Basic'
import Personal from '@/components/Profile/Update/Personal'
import Religion from '@/components/Profile/Update/Religion'
import Family from '@/components/Profile/Update/Family'
import Expectation from '@/components/Profile/Update/Expectation'
import Physical from '@/components/Profile/Update/Physical'
import Education from '@/components/Profile/Update/Education'
import Address from '@/components/Profile/Update/Address'

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
