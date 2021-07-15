import React from 'react'
import Hero from '../homepage/hero'
import Content from '../homepage/content'
import SeeReviews from '../staticpages/seeReviews'
import { Container } from '@material-ui/core'

export default function Main() {
  return (

    <>
        <Hero />
        {/* <Container> */}
        <Content />
        {/* </Container> */}
        <SeeReviews />
    </>

  )
}
