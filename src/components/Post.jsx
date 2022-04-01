

import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 350,
    //   width :400,
   
      
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
    mt: {
        marginTop :2,
        [theme.breakpoints.down("sm")]: {
           
            width: "70%",
        },
    }
  }));
  
  const Post = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" className={classes.mt} >
              Gender :- Femail
            </Typography>
            <Typography variant="body2" className={classes.mt} >
              Birthday :- Feb 24th,1997
            </Typography>
            <Typography variant="body2" className={classes.mt} >
            e-email:-xyz@gmail.com
            </Typography>
            <Typography variant="body2" className={classes.mt}>
            Phone Numbe:-23949944
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Sand Messages
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Post;










// import { Card, makeStyles } from '@material-ui/core'
// import React from 'react'


// const useStyles = makeStyles((theme) => ({

//     divimg: {
//         marginTop: 10,
//         borderRadius: "15px 50px",
//     },

// }));


// const Post = () => {
//     const classes = useStyles('');

//     return (
//         <>
//             <Card position="fixed" >
//                 <h2> ♀ Daine Cooper</h2>
//                 <div>
//                     <div className={classes.divimg} >
//                         <img src="https://cdn.luxe.digital/media/2019/09/11223918/luxe-digital-top-linkedin-influencers-erica-hanson.jpg"
//                             alt="Daine Cooper"
//                             width="300"
//                             height="300"
                            
//                         />
//                     </div>
//                 </div>
//             </Card>
//         </>
//     )
// }

// export default Post



