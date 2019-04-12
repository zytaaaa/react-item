import React,{Component} from 'react';

import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { connect } from 'react-redux';
import {fetchList} from '../../actions/product'

const mapStateToProps = (state)=>{
  return {
      lists : state.product
  }
}
const MapdispatchProps={
   fetchList
}
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop:"56px"
  },
  gridList: {
    width: 500,
    height:'100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes,lists} = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {lists.map((tile,index) => (
            <GridListTile component={Link}  to={`/product/${tile.id}`}  key={index}>
                <img src={tile.img[0]} alt={tile.title}/>
                  <GridListTileBar
                    title={<p style={{margin:'0 0 5px',fontSize:"14px"}}>{tile.title}</p>}
                    subtitle={<div><span style={{color:'red',fontSize:"18px"}}>{tile.newprice.number2}￥</span><del style={{color:'#ccc',fontSize:"12px",marginLeft:'10px'}}>原价：{tile.oldprice.number1}</del></div>}
                  />

             </GridListTile>
          ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

class Titlebar extends Component{
 componentDidMount(){
    this.props.fetchList();
 }
 render(){
     return (
         <TitlebarGridList {...this.props}/>
     )
 }
}

const productContainer=connect(mapStateToProps,MapdispatchProps)(Titlebar)
export default withStyles(styles)(productContainer);
