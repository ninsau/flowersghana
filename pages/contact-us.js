import React from 'react'
import { useRouter } from "next/router"
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
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

    <>
    </>


  )
}
