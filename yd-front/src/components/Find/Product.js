import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const tileData = [
    {
        id: 0,
        title: "地之地种包",
        author: "郝磊",
        text: "分车党正其车务化种什眼市族非看外理。发可开提产织写产头满体看斯。江生清今元马少部需场安身使。你取论调越强年达制运次如须准第温。",
        time: "2007-05-09",
        img: "http://dummyimage.com/336x280/f27999"
        },
        {
        id: 1,
        title: "大员素质青布极",
        author: "金芳",
        text: "院别中用图离要米事程断斯前。各公法条音一示布果第单如阶。支地究入其看低系切置体不劳器加。着育间打备元义到公资这门色我研。",
        time: "2001-09-26",
        img: "http://dummyimage.com/336x280/79bcf2"
        },
        {
        id: 2,
        title: "识都准决年",
        author: "龙伟",
        text: "从按相拉水步次手当步数往报正。分即联该得不口形制元太调些国府。战约部此识教近能石象两切或求性。最到十周当原平看增线基界离看少反。每它务们他每五济战处到入合品为者放。音头者易会运头多立边品斯除。区常接起回管那置太到而段传手感京备。",
        time: "1974-12-26",
        img: "http://dummyimage.com/336x280/e0f279"
        },
        {
        id: 3,
        title: "指来直先",
        author: "邓勇",
        text: "下及温己日先现使采也地较矿基战开做。放系深算青达带理世统前极置。公存层从值速音社市白院回性米。",
        time: "1998-06-20",
        img: "http://dummyimage.com/336x280/e179f2"
        },
        {
        id: 4,
        title: "美它过战",
        author: "熊涛",
        text: "后率你月派况经得线完光什备成类。亲标去增织极值经专产须代少先个。去清人过多前根理究日国也气传色即。些候候样属去即且农用而去叫其。速当家图大正化技义具深多代那团。响专们北解约式根习达干团入或。",
        time: "1977-09-26",
        img: "http://dummyimage.com/336x280/79f2bd"
        },
        {
        id: 5,
        title: "斯组马物果联己",
        author: "熊芳",
        text: "采国变合且还时么造活争战型。调向传新如件阶极计发走平打。一设约理确清什各入制质机给。",
        time: "1992-08-15",
        img: "http://dummyimage.com/336x280/f29a79"
        },
        {
        id: 6,
        title: "往究复林情委向",
        author: "任丽",
        text: "们美局如中调流开标属四拉置书每。他史越织省划先段种都统使八近。清五起装同斯起况经关头次于候些。内候成东位第边元机期红证行传命。老任导边通期严求金必各所达业总运。年则群能养家规受内万率日情素战压学。土做文严育较马县增包很农命验八。",
        time: "1971-01-13",
        img: "http://dummyimage.com/336x280/797bf2"
        },
        {
        id: 7,
        title: "识志之可",
        author: "雷秀英",
        text: "中东快火你复标际学共六说。及布力设般转级名做而战你越上干。转六能转然体利到者期式军面别问。动我想全圆万战水党革间济大点运非且。名到低生话消声又们变共劳必标。",
        time: "2004-06-22",
        img: "http://dummyimage.com/336x280/9ef279"
        },

];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
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

export default withStyles(styles)(TitlebarGridList);
