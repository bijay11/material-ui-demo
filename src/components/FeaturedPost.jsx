import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
  },
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,

    backgroundPosition: "center",
  },
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography gutterBottom className={classes.title}>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
        <CardActions>
          <Button variant="text" className={classes.btn}>
            Read More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default FeaturedPost;
