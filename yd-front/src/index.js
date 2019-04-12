import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import {My,Homes,Find,Cart,NewsDetail,ProductDetail,News,Product} from './components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Person from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';
import Explore from '@material-ui/icons/Explore';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

window.GLOBALURL='http://111.230.144.150:3003/';
const styles = {
    root: {
      position:'fixed',
      bottom:0,
      left:0,
      overflow: 'hidden',
      backgroundColor:'#d5d5d5',
      width:'100%',
      zIndex:10
    },
  };

  class LabelBottomNavigation extends Component {
    state = {
      value: 'home',
    };

    handleChange = (event, value) => {
       this.setState({ value },()=>{
         this.props.history.push(`/${value}`)
       });
    };
    componentDidMount(){
        this.setState({
          value:location.hash.split('/')[1]
        })
    }
   componentWillReceiveProps(){
      this.setState({
        value:location.hash.split('/')[1]
      })
   }
    render() {
      const { classes } = this.props;
      const { value } = this.state;

      return (
          <div>

            <div style={{marginBottom:"56px"}}>
            <Switch>
              <Route path='/find'  component={Find}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/my'  component={My}/>
              <Route path='/news/:id' component={NewsDetail}/>
              <Route path='/product/:id' component={ProductDetail}/>
              <Route  component={Homes}/>
              </Switch>
            </div>

        <BottomNavigation value={value} onChange={this.handleChange}  className={classes.root}>
          <BottomNavigationAction label="首页" value="home" icon={<Home />} />
          <BottomNavigationAction label="发现" value="find" icon={<Explore />} />
          <BottomNavigationAction label="订单" value="cart" icon={<ShoppingCart />} />
          <BottomNavigationAction label="我的" value="my" icon={<Person/>} />
        </BottomNavigation>
        </div>
      );
    }
  }

  LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 const ConnectSL=withStyles(styles)(LabelBottomNavigation);



class Index extends Component{
   render(){
       return (
        <Provider store={store}>
           <Router>
              <div>
                 <Switch>
                   <Route path='/' component={ConnectSL}></Route>
                 </Switch>
              </div>
           </Router>
          </Provider>
       )
   }
}
ReactDOM.render(<Index/>,document.getElementById('app'));