import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Pagin({ pageCount, pageIndex, setPageIndex }) {
  const classes = useStyles();
  let pagination = [];

  let pageCountSet = [];
  for (let i = 1; i <= pageCount; i++) {
    pageCountSet.push(i);
  }

  let finalIndexes = [];

  switch (pageCount > 5) {
    case true:
      switch (pageIndex) {
        case 0:
          //if on first page, show from 1-4 and then last page number
          if (pageIndex === 0) {
            finalIndexes = pageCountSet.slice(pageIndex, pageIndex + 3);
            finalIndexes.push(pageCount);
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          }
          break;
        case 1:
          //if on page 1, show from 1-4 and then last page number
          if (pageIndex === 1) {
            finalIndexes = pageCountSet.slice(pageIndex - 1, pageIndex + 3);
            finalIndexes.push(pageCount);
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          }
          break;

        //if on last page, show first page and last 4 page numbers
        case pageCountSet[pageCountSet.length - 1]:
          if (pageIndex === pageCountSet[pageCountSet.length - 1]) {
            finalIndexes = pageCountSet.slice(pageIndex - 4, pageIndex);
            finalIndexes.unshift(1);
            finalIndexes.splice(1, 0, "...");
          }
          break;

        //if on second page, show from 2-5 and last page number
        case pageCountSet[1]:
          if (pageIndex === pageCountSet[1]) {
            finalIndexes = pageCountSet.slice(0, pageIndex + 2);
            finalIndexes.push(pageCount);
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          }
          break;

        //if on last but one page, show last 5 page numbers
        case pageCountSet[pageCountSet.length - 2]:
          if (pageIndex === pageCountSet[pageCountSet.length - 2]) {
            finalIndexes = pageCountSet.slice(pageIndex - 3, pageIndex + 1);
            finalIndexes.unshift(1);
            finalIndexes.splice(1, 0, "...");
          }
          break;

        default:
          //if numbers in between, show one on each side as well as first and last page numbers
          finalIndexes = pageCountSet.slice(pageIndex - 2, pageIndex + 1);
          finalIndexes.unshift(1);
          finalIndexes.push(pageCount);
          finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          finalIndexes.splice(1, 0, "...");

          break;
      }
      break;

    default:
      for (let i = 1; i <= pageCount; i++) {
        pagination.push(
          <>
            <div key={i} className={classes.root}>
              <ButtonGroup aria-label="outlined primary button group">
                <Button
                  color={`${pageIndex === i ? "secondary" : ""}`}
                  onClick={() => setPageIndex(i)}
                >
                  {i}
                </Button>
              </ButtonGroup>
            </div>
          </>
        );
      }
      break;
  }

  finalIndexes.map((index) => {
    pagination.push(
      <>
        {index !== "..." && (
          <>
            <div key={index} className={classes.root}>
              <ButtonGroup aria-label="outlined primary button group">
                <Button
                  color={`${pageIndex === index ? "secondary" : ""}`}
                  onClick={() => setPageIndex(index)}
                >
                  {index}
                </Button>
              </ButtonGroup>
            </div>
          </>
        )}
        {index === "..." && (
          <>
            <Button>...</Button>
          </>
        )}
      </>
    );
  });

  return <ul className="pagination">{pagination}</ul>;
}
