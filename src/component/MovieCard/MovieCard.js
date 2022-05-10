import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
{
    card:{
    margin:theme.spacing(2),
    padding:theme.spacing(2),

     height:"70vh",   
    [theme.breakpoints.down('xs')]:{
        height:"auto"
    },
    border:"solid grey 1px",
    transition:"all 0.3s",
    "&:hover":{
        transform:"scale(1.1)",
        transition:"all 0.1s",
        cursor:"pointer"
    }
    }
}))