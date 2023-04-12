import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardStyles = {
  margin: "20px",
  width: "200px",
}

const ImageStyles = {
  height: "250px",
  objectFit: "cover",
}

const TextStyles = {
  paddingLeft: "10px",
}

const SubheaderStyle = {
  color: "grey",
}

export default function ProductCard(props) {

  const { name, price, imgBack, imgFront, status } = props;

  return (
    <div>
      <Card
        style={CardStyles}
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea>
          <div style={{display: "flex"}}>
            <CardMedia
              style={ImageStyles}
              component="img"
              // height="140"
              image={imgFront}
              alt="one"
              onMouseOver={e => (e.currentTarget.src = imgBack)}
              onMouseOut={e => (e.currentTarget.src = imgFront)}
            />
          </div>
          {/* <div
            style={
              "one of a kind" ? {backgroundColor:'green'} : {backgroundColor:'red'},
              {
              display: "flex",
              padding: "2px 5px 2px 5px",
              backgroundColor: "grey"
            }}
          >
            <Typography variant="caption">{status}</Typography>
          </div> */}
          <CardContent style={TextStyles}>
            <Typography
              noWrap
              gutterBottom
              variant="h5"
              component="div"
              // style={ name.length > 14 ? { fontSize: "20px" } : { variant: "h5" } }
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom style={SubheaderStyle}>
              R {price}
            </Typography>
            <Typography variant="caption">{status}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}