import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { showMovies } from '../../features/movies/movieSlice';
import MovieCards from '../MovieCard/MovieCards.jsx'
function MovieListing() {

  const data = useSelector((state) => state.moviess.value)
  const data2=useSelector((state)=>state.moviess.showValue)
  console.log(data2)
  console.log(data)
  var displayData = "";
  displayData =
  data.Response === "True" ?
  data.Search.map((movie, index) => {
    return <Grid item xs={12} sm={3}>
      <MovieCards movie={movie} index={index} />
      
      
      </Grid>
    })  : console.log("error")
    var displayShow="";
  displayShow =
  data2.Response === "True" ?
    data2.Search.map((movie, index) => {
      return <Grid item xs={12} sm={3}>
      <MovieCards movie={movie} index2={index} />

      
      </Grid>
    }):console.log("error in show")
    

  
  return <>
    
      <Grid container>
        {displayData}
        
       
      </Grid>
      <h1>SHOWS</h1>
      <Grid container>
        {displayShow}
     
      </Grid>
    
  </>;
}

export default MovieListing;
