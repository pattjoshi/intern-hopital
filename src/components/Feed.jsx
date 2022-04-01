import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import Scrol from './Scrol'

const useStyles = makeStyles((theme) => ({
    container1: {
        paddingTop: theme.spacing(10),
        flex: 10,
        height: "100vh",
       
    },
}));

const Feed = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container1}>
        
              <Post title="Diane Cooper" 
              img="https://wemeancareer.com/wp-content/uploads/2019/07/Canva-by-Viktor-Gladkov-Portrait-of-Young-Beautiful-Business-Woman.jpg"/>

            </Container>

            <Container>

              <Scrol />  

            </Container>
        </>


    );
};

export default Feed;












