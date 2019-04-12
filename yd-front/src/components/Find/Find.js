import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import News from './News';
import Product from './Product';
import {Link,Switch,Route} from 'react-router-dom'



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  topStyle:{
    top:0,
    position:'fixed',
    zIndex:10,
  }
});

class SimpleTabs extends React.Component {
  state = {
     value:0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
      <Switch>
          <Route path='/find/news' component={News}/>
          <Route path='/find/product' component={Product}/>
          <Route component={News}/>
      </Switch>
        <AppBar position="static" className={classes.topStyle}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="新闻" component={Link} to='/find/news'></Tab>
            <Tab label="产品" component={Link} to='/find/product'></Tab>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

// {value === 0 &&  <TabContainer><News/></TabContainer>}
// {value === 1 && <TabContainer><Product/></TabContainer>}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
