import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Row from "./row";
import Header from "./cardHeader";
import { Link, Route } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  Flipkart: {
    maxHeight : 25, 
    paddingLeft:"6%"
  },
  Amazon: {
    maxHeight : 35,
    paddingLeft: '7%'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  let logo = "https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png";
  let mylogoStyle = classes.Flipkart;
  if (props.ecommerce == "Amazon"){
    logo = "https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG";
    mylogoStyle = classes.Amazon;
  }
  return (
    <Card className={classes.root}>
      <Header change={props.Change} />
      <CardActionArea style={{ minHeight: "290px"}}>
        <CardMedia
          component="img"
          alt="Laptop"
          image={props.Image}
          title="Laptop"
          style={{padding: "0 30px 10px 30px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h8">
            {props.name}
          </Typography>
          <div style={{textAlign: "left", width: "150%", margin: "10px 0 -10px 0"}}>
          <Row 
            current_price={props.price}
            expected={props.expected}
            growth={props.per}
          />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.link} target="_blank">
          <Button variant="contained" color="primary" component="span">
            <b>view Now</b>
          </Button>
        </a>
        <img src={logo}  alt="From Flipkart" className={mylogoStyle}/ >
      </CardActions>
    </Card>
  );
}
