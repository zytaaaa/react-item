import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListAlt from '@material-ui/icons/ListAlt';
import Group from '@material-ui/icons/Group';
import Divider from '@material-ui/core/Divider';
import WorkOutline from '@material-ui/icons/WorkOutline'
import TrendingUp from '@material-ui/icons/TrendingUp'
import Comment from '@material-ui/icons/Comment'
import { connect } from 'react-redux';
import {fetchUser,getUserOut} from '../actions/login'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const mapStateToProps = (state)=>{
    return {
        user : state.user
    }
  }
const MapdispatchProps={
    fetchUser,getUserOut
}

const styles  = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#3f51b5',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class ButtonAppBar extends React.Component{
    state = {
        open: false,
        tel:''
      };
      hanleChangeTel=(e)=>{
        this.setState({
            tel:e.target.value
        })
     }
      handleClickOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };
      handleClickLogin=(tel)=>{
        this.props.fetchUser(tel);
          this.handleClose();
      };
      handleClickLogout=()=>{
        if(this.props.user.tel){
            if(confirm('确认退出吗？')){
              this.props.getUserOut();
            }
        }else{
            alert("请登录！");
        }

      }
    render(){
        const { classes,user} =this.props;
        return (
            <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        我的
                    </Typography>
                    <Button color="inherit" onClick={this.handleClickLogout}>退出</Button>
                    </Toolbar>
                </AppBar>
                    <List className={classes.root}>
                       {user.img ?
                            <ListItem>
                                <Avatar>
                                    <img src={user.img} style={{width:'100%',height:'100%'}}/>
                                </Avatar>
                               <ListItemText  primary={user.name} secondary={user.tel}/>
                                <Button>
                                   <KeyboardArrowRight/>
                                </Button>
                            </ListItem>:
                            <ListItem>
                              <Button variant="outlined" onClick={this.handleClickOpen} size='large' style={{background:'#fff',color:'blue',fontWeight:'700',marginLeft:' 7rem',
                              borderRadius: '20px'}}>
                                   点击登录
                              </Button>
                            </ListItem>
                            }

                    </List>

                  <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title"> 登录页</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                          填写登录信息
                      </DialogContentText>
                      <TextField
                            id="standard-name"
                            label="姓名"
                            className={classes.textField}
                            margin="normal"
                            placeholder='提示admin'
                      />
                      <TextField
                        id="standard-uncontrolled"
                        label="手机号"
                        className={classes.textField}
                        margin="normal"
                        onBlur={this.hanleChangeTel}
                        placeholder='提示1111111111'
                        />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        关闭
                      </Button>
                      <Button onClick={()=>{this.handleClickLogin(this.state.tel)}} color="primary">
                        登录
                      </Button>
                    </DialogActions>
                  </Dialog>

                </div>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <ListAlt  style={{color:'yellow'}}/>
                        </ListItemIcon>
                        <ListItemText primary="我的订单" />
                        <KeyboardArrowRight/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <WorkOutline  style={{color:'blue'}}/>
                        </ListItemIcon>
                        <ListItemText primary="领劵中心" />
                        <KeyboardArrowRight/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <Group style={{color:'red'}}/>
                        </ListItemIcon>
                        <ListItemText primary="客服小蜜" />
                        <KeyboardArrowRight/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                           <TrendingUp style={{color:'blue'}}/>
                        </ListItemIcon>
                        <ListItemText primary="我的淘气值" />
                        <KeyboardArrowRight/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                           <Comment style={{color:'blue'}}/>
                        </ListItemIcon>
                        <ListItemText primary="我的评价" />
                        <KeyboardArrowRight/>
                    </ListItem>
                    <Divider/>
                </List>
            </div>
          );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const myContainer=connect(mapStateToProps,MapdispatchProps)(ButtonAppBar)
export default withStyles(styles)(myContainer);
