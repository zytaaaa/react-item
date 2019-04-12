import React,{Component} from 'react';
import {connect} from 'react-redux';
import {decrease,increase} from '../../actions/cart'
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

var _ =require('lodash');
const mapStateToProps=state=>{
    return {
       carts:state.cart
    }
}
const MapdispatchProps={
  decrease,increase
}

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop:'5px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:'70%',
    position:'relative'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  fontStyle:{
      position:"fixed",
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)' ,
      color:"#f4c5e4",
   },
   margin: {
    margin: theme.spacing.unit,
  },
  CheckboxSty:{
    margin:0
  },
  paper: {
    position:'fixed',
    bottom:'56px',
    width:'100%',
    padding:'0.5rem 0px'
 },
 fab: {
    float:'right',
    marginRight:'20px'
 },
 spanStyle:{
    float:'right',
    margin:' 20px 10px 0 0'
 }
});


function MediaControlCard(props) {
  const { classes, theme,carts} = props;
  if(carts.length>0){
    return (
        <div style={{marginBottom:'8.5rem'}}>
        {carts.map(function(item){
          return (
            <Card className={classes.card} key={item.id}>
            <Checkbox className={classes.CheckboxSty} onChange={()=>{props.handlerChangeCheckbox(item,0)}}/>
                <CardMedia
                    className={classes.cover}
                    image={item.img[0]}
                    title={item.title}
                />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" style={{color:"red",fontSize:"18px"}}>
                      共：￥{item.allprice}
                  </Typography>
                      <p style={{color:"#ccc",fontSize:"12px",margin:0}}>单价: ￥{item.newprice.number2}</p>
                      <p  style={{color:"red",fontSize:"14px",margin:0}}>限购十件</p>
                  <Typography component="div" color="textSecondary" style={{position:'absolute',right: '0rem',top: '4rem'
                  }}>
                   <Fab size="small" color="secondary" aria-label="remove" className={classes.margin} onClick={()=>{props.decrease(item);props.handlerChangeCheckbox(item,1)}}>
                     <RemoveIcon />
                   </Fab>
                      {item.quantity}
                   <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} onClick={()=>{props.increase(item); props.handlerChangeCheckbox(item,1)}}>
                     <AddIcon />
                   </Fab>
                  </Typography>
                </CardContent>
              </div>
            </Card>
          )
        })}
        </div>
      );
  } else{
      return (
          <div className={classes.fontStyle}>
             <h3>空空如也</h3>
          </div>
      )
  }

}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

class ControlCard extends Component{
  constructor(props){
    super(props);
    this.state={
      checkValues:[],
      allnumber:0,
      allmoney:0,
    }
  }
   handlerChangeCheckbox=(value,num)=>{
    var allnum=0;
    var allmone=0;
    var checkValues=this.state.checkValues.slice();
    var pos=_.findIndex(this.state.checkValues,{id:value.id});
    if(pos==-1 && num==0){
       checkValues.push(value);
    }else if(pos!=-1 && num==0){
      checkValues.splice(pos,1);
    }
    this.setState({
        checkValues
    },()=>{
        var allDate=this.props.carts;
        var checkDate=[];
        checkValues.filter(function(item){
          var pos1=_.findIndex(allDate,{id:item.id});
            if(pos1!=-1){
               checkDate.push(allDate[pos1]);
            }
            return checkDate;
        })
        for(var i=0;i<checkDate.length;i++){
           allnum+=checkDate[i].quantity;
           allmone+=checkDate[i].allprice;
        }
        this.setState({
          allnumber:allnum,
          allmoney:allmone
        })
    })
   }
   render(){
   //console.log(this.state)
    const { classes} =this.props;
      return (
        <div>
         <MediaControlCard {...this.props} {...this.state} handlerChangeCheckbox={this.handlerChangeCheckbox}/>
         <Paper className={classes.paper} elevation={1}>
             <Typography>
             全选<Checkbox ref='allcheck'/>
                  <Fab variant="extended" className={classes.fab} color="secondary">结算({this.state.allnumber})</Fab>
                  <span className={classes.spanStyle}>总计：{this.state.allmoney}</span>
              </Typography>
          </Paper>
        </div>
      )
   }
}

const connectCarts=connect(mapStateToProps,MapdispatchProps)(ControlCard);
export default withStyles(styles, { withTheme: true })(connectCarts);
