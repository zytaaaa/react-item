import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NewsTop from './newsTop'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {addtocart} from '../../actions/cart'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
function mapStatetoProps(state){
  return {
      cart:state.cart
  }
}

const MapdispatchProps={
  addtocart
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  close: {
    padding: theme.spacing.unit / 2,
  },
  bg:{
    backgroundColor:'red'
  }
});

class RecipeReviewCard extends React.Component {

  state = { expanded: false ,productDate:{}, open: false,};
  handleClick = (props) => {
    console.log(props);
    this.setState({ open: true });
    props.addtocart(this.state.productDate);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  componentDidMount(){
    axios({
          method:'get',
          url:`http://localhost:3000/product/${this.props.match.params.id}`,
      }).then(res=>{
        this.setState({
            productDate:res.data
        })
    });
  };
  layout(props){
    return  props.history.goBack();
  }
  render() {
    const { classes } = this.props;
    const {productDate}=this.state;
   if(productDate.img){
    return (
        <div>
            <NewsTop/>
            <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={productDate.img[0]}
            title={productDate.title}
          />
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={<div><span style={{color:'red',fontSize:"18px"}}>{productDate.newprice.number2}￥</span><del style={{color:'#ccc',fontSize:"12px",marginLeft:'10px'}}>原价：{productDate.oldprice.number1}</del></div>}
          subheader={productDate.title}
        />

        <CardContent>
          <Typography component="p">
             {productDate.text}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.handleClick(this.props)}}>
        加入购物车
      </Button>
      <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={this.state.open}
      autoHideDuration={2000}
      onClose={this.handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id" style={{color:'green',fontWeight:700}}>已成功加入购物车!</span>}
      action={[
        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
          关闭
        </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={this.handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
      <Button variant="contained" color="secondary" className={classes.button}>
          立即购买
      </Button>
      <Button size="small" color="primary" onClick={()=>this.layout(this.props)}>
           退出
      </Button>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>详情:</Typography>
            <Typography paragraph>
              出厂地址：{productDate.address}
            </Typography>
            {productDate.img.map((item,index)=>{
               return (<Typography paragraph key={index}>
                   图片展示---{index}：<img src={item} />
                </Typography>)
            })}
          </CardContent>
        </Collapse>
      </Card>
        </div>
     );
   }else{
       return false
   }

  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CartContainer=connect(mapStatetoProps,MapdispatchProps)(RecipeReviewCard)

export default withStyles(styles)(CartContainer);
