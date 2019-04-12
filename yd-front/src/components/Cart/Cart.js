import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartContent from './CartContent'

const styles = {
    root: {
      flexGrow: 1,
      paddingTop:'56px'
    },
    header:{
      position:'fixed',
      top:'0px',
      left:'0px',
      width:'100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },

  };

  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
               购物车
            </Typography>
            <Button color="inherit">管理</Button>
          </Toolbar>
        </AppBar>
        <CartContent/>

      </div>
    );
  }

  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 export default withStyles(styles)(ButtonAppBar);