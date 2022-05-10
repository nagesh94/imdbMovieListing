import React from 'react';
import {Typography} from '@material-ui/core'
import useStyles from './Footer.js'

function Footer() {

  const classes=useStyles()
  return <div className={classes.footer}>
    <Typography>Movie app</Typography>
    <Typography>@2020 all rights reserved</Typography>
  </div>;
}

export default Footer;
