import { Avatar, Container, makeStyles, Typography } from "@material-ui/core";
import {

    List,
    Home,
    Person,
    PlayCircleOutline,
    Settings,
    TabletMac,
    Help,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
    
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
            cursor: "pointer",
        },
    },

    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
            cursor: "pointer",
        },
    },
    doctor: {
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",


    },
    doctext: {
        fontWeight: 500,
        marginTop: 10,
        color: "#000000",
        [theme.breakpoints.down("sm")]: {
            display: "none",
            cursor: "pointer",
        },
    }



}));

const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Overview</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>Petient List</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.text}>Calender</Typography>
            </div>

            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>Video Msg</Typography>
            </div>

            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>Payment info</Typography>
            </div>

            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Settings</Typography>
            </div>

            <div className={classes.item}>
                <Help className={classes.icon} />
                <Typography className={classes.text}>Help?</Typography>
            </div>

            <div className={classes.doctor}>
                <Avatar
                    alt="Doctor img"
                    src="https://www.independent.ie/irish-news/education/671f1/40328133.ece/AUTOCROP/w620/A%20young%20caring%20doctor"
                />
                <Typography className={classes.doctext}>Drg.Adam H..</Typography>
            </div>

        </Container>
    );
};

export default Leftbar;
