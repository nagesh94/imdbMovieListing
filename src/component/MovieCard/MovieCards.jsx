import { Card, CardMedia, Grid,  Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './MovieCard'

function MovieCards(props) {

  const classes=useStyles()
  return <div>
        <Link to={`/movie/${props.movie.imdbID}`}>
        <Card className={classes.card}>
          <CardMedia
          component="img"
          
          src={props.movie.Poster}/>
          <Typography variant='h7'>
            Title:{props.movie.Title}
          </Typography>
        </Card>
        </Link>
          
  </div>;
}

export default MovieCards;
