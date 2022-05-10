import axios from "axios";

export default axios.create({
    baseURL:"http://www.omdbapi.com"
})

//axios.create() is used to create the instance of the axios 
//baseurl is used such that wo dont need to write the absolute path everytime