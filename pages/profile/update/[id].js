import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Personal from '@/components/Profile/Update/Personal'
import Education from '@/components/Profile/Update/Education'
import Physical from '@/components/Profile/Update/Physical'
import Religion from '@/components/Profile/Update/Religion'
import Address from '@/components/Profile/Update/Address'
import Basic from '@/components/Profile/Update/Basic'
import Family from '@/components/Profile/Update/Family'
import Expectation from '@/components/Profile/Update/Expectation'

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
