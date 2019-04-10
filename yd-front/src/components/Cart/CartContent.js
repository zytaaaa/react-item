import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const mapStateToProps=state=>{
    return {
       carts:state
    }
}

const styles = theme => ({
  card: {
    display: 'flex',
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
   }
});

function MediaControlCard(props) {
  const { classes, theme,carts} = props;
  if(carts.length>0){
    return (
        <div>
        {carts.map(function(item){
          return (
            <Card className={classes.card} key={item.id}>
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
                  <Typography variant="subtitle1" style={{color:"red",float:"left",fontSize:"18px"}}>
                     ￥{item.newprice.number2}
                  </Typography>
                  <Typography component="div" color="textSecondary" style={{float:"right",lineHeight:'28px'}}>
                    {item.quantity}个
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
const connectCarts=connect(mapStateToProps)(MediaControlCard);
export default withStyles(styles, { withTheme: true })(connectCarts);
