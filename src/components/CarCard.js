import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CarCard = (props) => {
  const { avatarUrl, name, shortInfo, description, imageUrl, id } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        title={name}
        subheader={shortInfo}
      />
      <CardMedia style={{ height: '150px' }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={``} size="small">
          RENT
        </Button>
        <Button component={Link} to={`/car/${id}`} size="small">
          DETAILS
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;
