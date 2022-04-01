import {
    Link,
    Avatar,
    Container,
    makeStyles,
    Typography,
    Divider,


} from "@material-ui/core";
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import { AvatarGroup } from "@material-ui/lab";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#000000",
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
    },
    divnote: {
        flex: 5,
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

}));

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>
                Doctor list's
            </Typography>
            <AvatarGroup max={6} style={{ marginBottom: 20 }}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                    alt="Travis Howard"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                />
                <Avatar
                    alt="Cindy Baker"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                />
                <Avatar alt="Agnes Walker" src="" />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/6.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/7.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com/static/images/avatar/8.jpg"
                />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>
                Notes
            </Typography>
            <div className={classes.divnote}>
                <Typography className={classes.link} gutterBottom>
                    -This patient is Lorem ipsum dolor.
                </Typography>
                <Typography className={classes.link} gutterBottom>
                    -Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className={classes.link} gutterBottom>
                    -Lorem ipsum dolor
                </Typography>

            </div>
            {/* file and resume */}
            <Typography className={classes.title} gutterBottom>
                Files/ Documents
            </Typography>

            <div className={classes.item}>
                <AttachFileOutlinedIcon className={classes.icon} />
                <Typography className={classes.link} variant="body2">Medical Prescription.pdf</Typography>
            </div>
            <div className={classes.item}>
                <AttachFileOutlinedIcon className={classes.icon} />
                <Typography className={classes.link} variant="body2">Dentak X-Ray Result.pdf</Typography>
            </div>
            <div className={classes.item}>
                <BackupOutlinedIcon className={classes.icon} />
                <Typography className={classes.link} variant="body2">Check Up Result.pdf</Typography>
            </div>

            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={classes.link} variant="body2">
                Cardiologist
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Audiologist
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Dentist
            </Link>
            <Divider flexItem style={{ marginBottom: 5 }} />
            <Link href="#" className={classes.link} variant="body2">
                Gynaecologist
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                ENT
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Psychiatrists
            </Link>
        </Container>
    );
};

export default Rightbar;
