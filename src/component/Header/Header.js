import { makeStyles } from '@material-ui/core'
import '../../common/colors.scss'

export default makeStyles(() => (
    {
        main: {
            backgroundColor:"black",
            color:"white",
            marginBottom: 10,
            padding:"10px 20px",
            height:72,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        },
        link:{
            textDecoration:"none",
            color:"white"
        },
        input:{
            color:"white"
        }
    }));
