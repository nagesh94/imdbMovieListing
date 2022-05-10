import { Container,Grid,Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../features/movies/movieSlice';
import useStyles from "./MovieDetails"
import {Star,ThumbUp,Theaters,Cake} from "@material-ui/icons"

function MovieDetails() {
  const classes=useStyles()
  const dispatch=useDispatch();
  const {imdbID}=useParams()
  console.log(imdbID)
  const data=useSelector((state)=>state.moviess.details)
  useEffect(()=>
  {
    
    dispatch(fetchDetails(imdbID))
  },[dispatch],imdbID)
  return <div>
    <Container className={classes.container}>
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={8}>
        <Typography variant='h5' className={classes.title}>{data.Title}</Typography>
        <div className={classes.imdb}>
          <Typography variant='h7' className={classes.imdbIn}>IMDB Rating <Star style={{color:"yellow"}}/>: {data.imdbRating}</Typography>
          <Typography variant='h7' className={classes.imdbIn}>
            IMDB Voters <ThumbUp/>:{data.imdbVotes}
          </Typography>
          <Typography variant='h7' className={classes.imdbIn}>
            Runtime <Theaters/>:{data.Runtime}
          </Typography>
          <Typography variant='h7' className={classes.imdbIn}>
            Year:<Cake/>:{data.Year}
          </Typography>
        </div>

        <div className={classes.plot}>
          <Typography >{data.Plot}</Typography>
        </div>
        <div className={classes.cast}>
          <Typography className={classes.castdetails}>
            Director  :  {data.Director}
          </Typography>
          <Typography className={classes.castdetails}>
            Genere  : {data.Genre}
          </Typography>
          <Typography className={classes.castdetails}>
            cast : {data.Actors}
          </Typography>
          <Typography className={classes.castdetails}>
            Language :{data.Language}
          </Typography>
          <Typography className={classes.castdetails}>
            Awards:{data.Awards}
          </Typography>
        </div>
      </Grid>
      <Grid item  sm={4} className={classes.poster}>
      <img src={data.Poster} alt="" />
      </Grid>
    </Grid>
    </Container>
  </div>;
}

export default MovieDetails;

    // <Container className={classes.container}>
    //   <h1>Title:{data.Title}</h1>
    //   <img src={data.Poster} alt="" />
    //   {
    //     data.Ratings?<div className={classes.rating}>
    //     {data.Ratings.map((item=>
    //       {
    //         return <h4>{item.Source} : <span className={classes.value}>{item.Value }</span></h4>
    //       }))}
    //   </div>:""
    //   }

    // </Container>