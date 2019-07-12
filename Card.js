import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  const dt=new Date(props.dt)
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weather For: {props.name} At: {dt.toGMTString()}
          </Typography>
          <table>
          <tr>
          <td valign='top' style={{textAlign:'top',padding:'10px',borderRight: '2px solid #cdd0d4'}}>
          <Typography component="p">
            <b>Weather Description</b>
            <p>Condition: <b>hhh{props.mainDesc}</b></p>
            <p>Naration: <b>hhh{props.secDesc}</b></p>
            <p></p>
          </Typography>
          </td>
          <td valign='top' style={{padding:'10px',borderRight: '2px solid #cdd0d4'}}>
          <Typography component="p">
            <b>Temperature</b>
            <p>Now: <b style={{color:'lightGreen'}}>hhh{props.tempNow}</b></p>
            <p>Maximum: <b style={{color:'red'}}>hhh{props.tempMax}</b></p>
            <p>Minimum: <b style={{color:'blue'}}>hhh{props.tempMin}</b></p>
          </Typography>
          </td>
          <td valign='top' style={{textAlign:'top',padding:'10px',borderRight: '2px solid #cdd0d4'}}>
          <Typography component="p">
            <b>Wind</b>
            <p>Speed: <b>hhh{props.windSpeed}</b></p>
            <p>Direction: <b>hhh{props.windDir}</b></p>
          </Typography>
          </td>
          <td valign='top' style={{textAlign:'top',padding:'10px',borderRight: '2px solid #cdd0d4'}}>
          <Typography component="p">
            <b>Miscelleneous</b>
            <p>Pressure: <b>hhh{props.pressure}</b></p>
            <p>Humidity: <b>hhh{props.humidity}</b></p>
            <p>Cloud Cover: <b>hhh{props.clouds}</b></p>
          </Typography>
          </td>
          </tr>
          </table>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);