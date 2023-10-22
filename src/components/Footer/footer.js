import React from 'react'
import Copyright from './subcomponents/copyright'
import DbhFooter from './subcomponents/dbhFooter'

export default function Footer( {contactRef, productRef, aboutUsRef, serviceRef, heroRef}) {
  return (
    <div className=''>
      <DbhFooter  contactRef={contactRef} productRef={productRef} aboutUsRef={aboutUsRef} serviceRef={serviceRef} heroRef={heroRef}/>
      <Copyright />
    </div>
  )
}
