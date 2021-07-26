import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { stateStore } from "./store";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { useRouter } from "next/router";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  // table: {
  //   minWidth: 500,
  // },
});

export default function ShoppingCartComponent() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const done = stateStore((state) => state.done);
  const [data, setData] = useState([]);
  let router = useRouter();

  const FetchCount = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const value = await localforage.length().then(function (numberOfKeys) {
        setCount(numberOfKeys);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchCount();
  }, [done]);

  const ClearCart = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      localforage.clear().then(function () {
        console.log("Database is now empty.");
        router.reload("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FetchData = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      const data = [];
      await localforage.iterate(function (value, key, iterationNumber) {
        data.push({ key, ...value });
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchData();
  }, [done]);

  return (
    <>
      <Badge badgeContent={count} onClick={handleClickOpen} color={"secondary"}>
        <ShoppingCartOutlinedIcon />
      </Badge>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          {data.length < 1 ? (
            <>
              <Typography>Shopping cart is empty.</Typography>
              <DialogActions>
                <Button color="secondary" onClick={handleClose}>
                  CLose
                </Button>
                <Link href="/category/popular">
                  <Button color="primary">Start shopping</Button>
                </Link>
              </DialogActions>
            </>
          ) : (
            <>
              <DialogTitle id="form-dialog-title">Shopping Cart</DialogTitle>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell>Price&nbsp;(₵)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {row.key}
                        </StyledTableCell>
                        <StyledTableCell>{row[0]}</StyledTableCell>
                        <StyledTableCell>{row[1]}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography style={{ margin: 20 }} variant="h6">Total: ₵21</Typography>
              <DialogActions>
                <Button onClick={handleClose}>CLose</Button>
                <Button color="secondary" onClick={ClearCart}>
                  Clear Cart
                </Button>
                <Button color="primary">Checkout</Button>
              </DialogActions>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
