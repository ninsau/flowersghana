import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import ShoppingCartComponent from "../../cart/shoppingCart";
import { useRouter } from "next/router";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";

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
    cursor: "pointer",
  },
}));

const sections = [
  { title: "Reviews", url: "/reviews" },
  { title: "Featured", url: "/category/featured" },
  { title: "Popular", url: "/category/popular" },
  { title: "Birthday", url: "/category/birthday" },
  { title: "Budget", url: "/category/budget" },
  { title: "Roses", url: "/category/roses" },
  { title: "Sympathy", url: "/category/sympathy" },
  { title: "Anniversary", url: "/category/anniversary" },
  { title: "Add-Ons", url: "/category/add-on" },
  { title: "All", url: "/category/all" },
];

export default function HeaderComponent() {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small" onClick={() => router.push("/")}>
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
                src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.png"
                alt="flowersghana logo"
                width={200}
                height={73}
              />
            </Link>
          </Hidden>
        </Typography>

        <IconButton onClick={handleClick}>
          <Link color="inherit">
            <CallOutlinedIcon aria-label="call" />
          </Link>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link href="tel:+233242877574">
            <MenuItem>Call Kojo (MTN)</MenuItem>
          </Link>
          <Link href="tel:+233209859591">
            <MenuItem>Call Kwabena (Vodafone)</MenuItem>
          </Link>
        </Menu>
        <IconButton onClick={() => router.push("/search/random")}>
          <SearchIcon aria-label="search" />
        </IconButton>
        <IconButton>
          <ShoppingCartComponent />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color={`${router.asPath === section.url ? "secondary" : "inherit"}`}
            noWrap
            key={section.title}
            variant="body2"
            onClick={() => router.push(section.url)}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}
