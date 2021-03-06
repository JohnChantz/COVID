import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {headerHeight} from "./Layout";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: `calc(100vh - ${headerHeight}px)`,
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
}));

export default function Hero(props) {
  const {title, description, image, ...rest} = props;

  const classes = useStyles();

  return (
      <Container maxWidth={"lg"} className={classes.root} {...rest}>
        <Grid container alignItems={"center"}>
          <Grid item md={6} xs={12}>
            <Box p={2}>
              <Typography gutterBottom variant="h4" component="h2">
                {title}
              </Typography>
              {description && description.split('\n').flatMap((paragraph, ind) => (
                  <Typography key={ind} paragraph variant="body1" color="textSecondary" component="p">
                    {paragraph}
                  </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item md={6} xs={12} container justify={"flex-end"}>
            <Box p={2}>
              <img src={image} alt={''} className={classes.image}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
  );
}

