import React from 'react'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './header'
import Hero from './hero'
import Content from './content'
import SeeReviews from './seeReviews'
import Footer from './footer'

export default function Main() {
  return (

    <>
    <Head>
      <title>Send flowers to Ghana | FlowersGhana</title>
      <link rel="icon" href="/banner.jpg" />
    </Head>
      <CssBaseline />
      <Container>
        <Header />
        <Hero />
        <Content />
        <SeeReviews />
        <Footer />
      </Container>
    </>

  )
}
