import create from "zustand";

export const stateStore = create((set) => ({
  done: false,
  setDone: (val) => set((state) => ({ done: val })),
}));


// import Badge from "@material-ui/core/Badge";
// import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// import React, { useEffect, useState } from "react";
// import localforage from "localforage";
// import { stateStore } from "./store";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Button from "@material-ui/core/Button";
// import { DataGrid } from "@material-ui/data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, "firstName") || ""} ${
//         params.getValue(params.id, "lastName") || ""
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function ShoppingCartComponent() {
//   const [open, setOpen] = useState(false);
//   const [count, setCount] = useState(0);
//   const done = stateStore((state) => state.done);

//   const FetchCount = async (values) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));

//     try {
//       const value = await localforage.length().then(function (numberOfKeys) {
//         setCount(numberOfKeys);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     FetchCount();
//   }, [done]);

//   //   localforage.clear().then(function() {
//   //     // Run this code once the database has been entirely deleted.
//   //     console.log('Database is now empty.');
//   // }).catch(function(err) {
//   //     // This code runs if there were any errors
//   //     console.log(err);
//   // });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Badge badgeContent={count} onClick={handleClickOpen} color={"secondary"}>
//         <ShoppingCartOutlinedIcon />
//       </Badge>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Shopping Cart</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please choose the quantity of you want for your purchase today.
//           </DialogContentText>
//           <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//             disableSelectionOnClick
//           />
//           </div>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button type="submit" color="secondary">
//               Add to cart
//             </Button>
//           </DialogActions>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
