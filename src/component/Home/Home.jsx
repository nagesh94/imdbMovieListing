import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing.jsx';
import movieApi from '../../common/api/movieApi.js';
import {APIKey} from '../../common/api/MovieApiKeys.js'
import {useDispatch} from 'react-redux'
import { addMovies, fetchMovie, fetchShow } from '../../features/movies/movieSlice.js';
// import {addMovies} from '../../features/movies/movieSlice'

function Home() {

  const dispatch = useDispatch()
  useEffect(()=>{
    // movieApi.get(`?apiKey=${APIKey}&s=Harry&type=movie`).then((datas)=>
    // { 
    //   console.log(datas['data'])
    //   dispatch(addMovies(datas['data']))
    // }).catch((err)=>
    // {
    //   console.log("error")
    // })

    dispatch(fetchMovie())   //async calling
    dispatch(fetchShow())
  },[dispatch])
  return <div>
    <MovieListing/>
    </div>;
}

export default Home;
