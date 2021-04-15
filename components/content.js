import { React, useState, useEffect } from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
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
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridList2: {
  flexWrap: 'nowrap',
  // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: 'translateZ(0)',
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
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {featured.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <Link href={`/item/${tile.slug}`}>
                <GridListTileBar
                title={tile.title}
                subtitle={<span> Ghs {tile.price}</span>}
                actionIcon={
                  <IconButton aria-label={`shop ${tile.title}`} className={classes.icon}>
                    <ShoppingCartOutlinedIcon className={classes.title} />
                    </IconButton>
                  }
                  />
                </Link>
            </GridListTile>

          ))}
          {popular.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                subtitle={<span> Ghs {tile.price}</span>}
                actionIcon={
                  <IconButton aria-label={`shop ${tile.title}`} className={classes.icon}>
                    <ShoppingCartOutlinedIcon className={classes.title} />
                    </IconButton>
                  }
                  />
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
              <ShoppingCartOutlinedIcon className={classes.title} />
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
