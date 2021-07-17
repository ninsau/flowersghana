import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Hidden from "@material-ui/core/Hidden";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  { title: "Featured", url: "/bouquets/featured" },
  { title: "Popular", url: "/bouquets/popular" },
  { title: "Birthday", url: "/bouquets/birthday" },
  { title: "Budget", url: "/bouquets/budget" },
  { title: "Roses", url: "/bouquets/roses" },
  { title: "Reviews", url: "/reviews" },
];

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small" href="/">
          FlowersGhana
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Hidden smDown>
            <Link href="/">
              <img
                src="/logo/banner.JPG"
                alt="flowersghana logo"
                width={200}
                height={70}
              />
            </Link>
          </Hidden>
        </Typography>

        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}
