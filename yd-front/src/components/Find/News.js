import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    marginTop: '20px',
  },
  inline: {
    fontSize:'0.75rem'
  },
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      {
        props.stateList.map(function(item,index){
            return  (
                <NavLink to={`/news/${index}`} key={index} style={{color:'blue'}}>
                <ListItem alignItems="flex-start" button>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" className={classes.inline} color="textPrimary">
                        作者：{item.author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{item.time}
                      </Typography>
                      <span style={{marginTop:'5px',whiteSpace:"nowrap",overflow:'hidden',textOverflow:'ellipsis',display:'block'}}>{item.text}</span>
                    </React.Fragment>
                  }
                />
              </ListItem>
             <Divider/></NavLink>)
        })
     }
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

class ListDate extends Component{
    constructor(props) {
        super(props);
        this.state={
            stateList:[]
        }
    }
   componentDidMount(){
        axios({
            method:'get',
            url:'http://localhost:3000/news',
        }).then(res=>{
        this.setState({
            stateList:res.data
        })
    });
   }
   render(){
       return (
           <ListDividers {...this.props} {...this.state}/>
       )
   }
}


export default withStyles(styles)(ListDate);