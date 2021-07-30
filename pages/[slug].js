import React from "react";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { textData } from "../store/textData";
import Custom404Component from "../components/utils/custom404";

export default function Info() {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ margin: 30 }}>
            {textData[slug] === undefined && <Custom404Component />}
            {textData[slug] !== undefined && (
              <Container>
                <Typography
                  component="h4"
                  variant="h4"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  {textData[slug]["title"]}
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  color="textSecondary"
                  component="p"
                >
                  {textData[slug]["description"]}
                </Typography>
              </Container>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
