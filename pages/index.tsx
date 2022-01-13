import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../components/dashboard'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - FlowersGhana</title>
        <meta name="description" content="Order management page for flowersGhana" />
        <link rel="icon" href="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp" />
      </Head>

      <Dashboard/>
    </>
  )
}

export default Home
