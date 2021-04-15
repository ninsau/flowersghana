import { React, useState, useEffect } from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 920,
    height: 1200,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridList2: {
  flexWrap: 'nowrap',
  // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: 'translateZ(0)',
},
title2: {
  color: theme.palette.primary.light,
},
titleBar2: {
  background:
    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
},
}))





export default function Content() {
  const classes = useStyles()

  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1/api/flowers/featured')
      .then(response => response.json())
      .then(data =>
              setFeatured(data)
            )
          }, [setFeatured])

          const [popular, setPopular] = useState([])

          useEffect(() => {
            fetch('http://127.0.0.1/api/flowers/popular')
              .then(response => response.json())
              .then(data =>
                      setPopular(data)
                    )
                  }, [setPopular])
  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12}>
    <div className={classes.root}>
      <GridList cellHeight={380}  spacing={30} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Shop Featured Products</ListSubheader>
        </GridListTile>
        {featured.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} height="600px" width="480px" />
            <Link href={`/item/${tile.slug}`}>
            <GridListTileBar
              title={tile.title}
              subtitle={<span> Ghs {tile.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </Link>
          </GridListTile>
        ))}
      </GridList>
      </div>
      </Grid>

      <Grid item xs={12}>
        <div className={classes.root}>
        <GridList cellHeight={380} className={classes.gridList2} cols={2.5}>
        {popular.map((tile) => (
          <GridListTile key={tile.img}>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
          title={tile.title}
          subtitle={<span> Ghs {tile.price}</span>}
          actionIcon={
            <IconButton aria-label={`shop ${tile.title}`} className={classes.icon}>
              <InfoIcon className={classes.title} />
              </IconButton>
            }
            />
            </GridListTile>
          ))}
          </GridList>
          </div>
          </Grid>
          </Grid>
    </>
  )
}
