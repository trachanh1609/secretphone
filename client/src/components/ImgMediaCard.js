import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import myAvatar from '../myAvatar.png';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes, name } = props;
  return (
    <Card className={classes.card}>
      <h4>Hello {name}! Nice to meet you</h4>
      <CardActionArea>
  
        <CardMedia
          component="img"
          className={classes.media}
          height="400"
          image={myAvatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Vu Nguyen
          </Typography>
          <Typography component="p">
            Country : Finland
          </Typography>
          <Typography component="p">
            Zalo : <strong>+358 442048050</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);