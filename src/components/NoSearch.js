import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ErrorOutlineTwoToneIcon from "@material-ui/icons/ErrorOutlineTwoTone";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

export default function NoSearch() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4} align-items-xs-center>
          <ErrorOutlineTwoToneIcon />
          <p> No results found </p>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <p> No results found </p>
            <p>Try adjusting your search to find what you are looking for.</p>
            <Button color="primary">Clear Search</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
} 