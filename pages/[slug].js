import React from 'react'
import { useRouter } from "next/router"
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import { textData } from "../store/textData"


const useStyles = makeStyles((theme) => ({
heroContent: {
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
},
}))

function getData(slug, prop) {
  if (textData[slug]) {
    return textData[slug][prop]
  }

  return <p>Page Not Found</p>
}

export default function Info() {
  const classes = useStyles()
  const router = useRouter()

  const [slug, setSlug] = React.useState(router.query.slug)

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setSlug(url.substr(1))
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (

    <React.Fragment>
    <Head>
      <title>{slug && getData(slug, "title")} | Flowers Ghana</title>
      <link rel="icon" href="/banner.jpg" />
    </Head>
      <Container>
        <Header />
        <Grid container spacing={3}>
        <Grid item xs={12}>
        {/* Hero unit */}
         <Container className={classes.heroContent}>
           <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
             {slug && getData(slug, "title")}
           </Typography>
           <Typography variant="h6" align="left" color="textSecondary" component="p">
             {slug && getData(slug, "description")}
            </Typography>
         </Container>
         {/* End hero unit */}
         </Grid>
         </Grid>
        <Footer />
      </Container>
    </React.Fragment>


  )
}
