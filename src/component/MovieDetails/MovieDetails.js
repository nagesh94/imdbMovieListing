import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>
({  
    
    container:{
       boxSizing:"border-box",
       overflow:"none",
       backgroundColor:"black",
       color:"white"
    },
    rating:{
        margin:theme.spacing(2)
    },
    value:{
        color:"red"
    },
    imdb:{
        display:"flex"
    },
    imdbIn:{
        display:"flex",
        alignItems:"center",
        margin:theme.spacing(1)
    },
    cast:{
        display:"flex",
        flexDirection:"column",
        marginTop:theme.spacing(2)
    },
    castdetails:{
        marginTop:theme.spacing(2)
    },
    plot:{
        marginTop:theme.spacing(2)
    }

}))