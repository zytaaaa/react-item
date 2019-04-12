import React from 'react';
import axios from 'axios';
import Banner from './Banner'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navStyle:{
    marginTop:"5px",
    minHeight:'40px',
    width:'70%',
    borderRadius: '6px',
  },
  card: {
    display: 'flex',
    marginTop:'5px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    minWidth: '7rem'
  }
});

class PrimarySearchAppBar extends React.Component {
  state={
    newlist:[],
    prolist:[],
  }
  componentDidMount(){
     this.newDate();
     this.productDate();
  }
  newDate(){
    axios({
      method:'get',
      url:`${GLOBALURL}news?_page=1&_limit=5`
    }).then((res)=>{
        this.setState({
          newlist:res.data
        })
    })
  }
  productDate(){
    axios({
      method:'get',
      url:`${GLOBALURL}product?_page=1&_limit=5`
    }).then((res)=>{
        this.setState({
          prolist:res.data
        })
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              首页
            </IconButton>
          </Toolbar>
        </AppBar>
        <Banner/>
        <AppBar position="static" color="secondary" className={classes.navStyle}>
          <Toolbar style={{minHeight:'2rem'}}>
            <Typography variant="h6" color="inherit">
               - - - - 产品 - - - -
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.prolist.length>0 ?
          <div>
           {this.state.prolist.map((value)=>{
          return (<Card className={classes.card} key={value.id}>
          <CardMedia
              className={classes.cover}
              image={value.img[0]}
              title={value.title}
            />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
              {value.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {value.address}
              </Typography>
            </CardContent>
          </div>
        </Card>)
        })}</div>:false}
        <AppBar position="static" color="secondary" className={classes.navStyle}>
        <Toolbar style={{minHeight:'2rem'}}>
        <Typography variant="h6" color="inherit">
           - - - - 新闻 - - - -
        </Typography>
      </Toolbar>
    </AppBar>
    {this.state.newlist.length>0 ?
      <div>
       {this.state.newlist.map((value)=>{
      return (<Card className={classes.card} key={value.id}>
      <CardMedia
          className={classes.cover}
          image={value.img}
          title={value.title}
        />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
          {value.title}
          </Typography>
          <Typography component="span" color="textSecondary">
            {value.author}
          </Typography>
        </CardContent>
      </div>
    </Card>)
    })}</div>:false}

      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,{ withTheme: true })(PrimarySearchAppBar);
