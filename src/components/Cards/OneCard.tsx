import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ModalWindow from "../Modal/ModalWindow";

const useStyles = makeStyles({
  card: {
    width: 210,
    maxWidth: 300,
    maxHeight: 300,
    marginRight: "12px"
  }
});

export interface CardProps {
  title: string;
  image: string;
  alt: string;
  name: string;
  content: string;
}

export default function OneCard(props: CardProps) {
  const classes = useStyles();
  const { title, image, alt, name, content } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card} onClick={() => setOpen(true)}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={alt}
            height="220"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textAlign: "center" }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalWindow
        title={title}
        content={content}
        open={open}
        onClose={handleClose}
        image={image}
      />
    </>
  );
}
