import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { setAutoFreeze } from "immer";
import MovieListing from "../../component/MovieListing/MovieListing";
import movieApi from '../../common/api/movieApi.js';
import {APIKey} from '../../common/api/MovieApiKeys.js'

export const fetchMovie=createAsyncThunk("movies/fetchMovie",
async (movie)=>
{
   const response= await movieApi.get(`?apiKey=${APIKey}&s=${movie}&type=movie`)
   console.log(response.data)
   return response['data'];
});
export const fetchShow=createAsyncThunk("movies/fetchShow",
async (show)=>
{
   const response= await movieApi.get(`?apiKey=${APIKey}&s=${show}&type=series`)
   console.log(response.data)
   return response['data'];
})
export const fetchDetails=createAsyncThunk("movies/fetchDetails",
async (id)=>
{   console.log(id)
   const response= await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
   console.log(response.data)
   return response['data'];
})



const initialState={
    value:{},
    showValue:{},
    details:{}
}


const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:
    {
        addMovies:(state,{payload})=>
        {
            state.value=payload;
        }
    },
    extraReducers:{
        [fetchMovie.pending]:()=>{
            console.log("pending....")
        },
        [fetchMovie.fulfilled]:(state,{payload})=>
        {   
            console.log("success")
            return {...state,value:payload}
        },
        [fetchShow.pending]:()=>
        {
            console.log("pending")
        },
        [fetchShow.fulfilled]:(state,{payload})=>
        {
            console.log("show success....")

            return {...state,showValue:payload}
        },
        [fetchDetails.fulfilled]:(state,{payload})=>
        {
            console.log("detail success....")

            return {...state,details:payload}
        }
    }

})

export const {addMovies} = movieSlice.actions;
export const showMovies=(state)=>state.moviess.value
export default movieSlice.reducer