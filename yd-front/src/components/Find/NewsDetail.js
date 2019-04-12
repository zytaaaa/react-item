import React,{Component} from 'react';
import axios from 'axios'
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewsTop from './newsTop'
const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 280,
  },
};

function layout(props){
   return  props.history.goBack();
}

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.newData.img}
          title={props.newData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.newData.title}
          </Typography>
          <Typography component="p">
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           {props.newData.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          分享
        </Button>
        <Button size="small" color="primary">
          评论
        </Button>
        <Button size="small" color="primary" onClick={()=>layout(props)}>
          退出
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
class Media extends Component{
    constructor(props) {
      super(props);
      this.state={
         newData:[]
      }
    }
    componentDidMount(){
      axios({
            method:'get',
            url:`${GLOBALURL}news/${this.props.match.params.id}`,
        }).then(res=>{
          this.setState({
            newData:res.data
          })
      });
    }
    render() {
       return (
           <div>
              <NewsTop/>
              <MediaCard {...this.state} {...this.props}/>
           </div>
      )
    }
  }
export default withStyles(styles)(Media);
