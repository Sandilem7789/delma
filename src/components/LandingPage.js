import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuSharp from "@material-ui/icons/MenuSharp";
import Grid from "@material-ui/core/Grid";

/* Modal */
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
            /*Icons*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

/* CUSTOM COMPONENTS */
import Videos from "./Categories/Videos";
import Blog from "./Categories/Blog";
import Podcasts from "./Categories/Podcasts";
import WelcomeText from "./WelcomeText";

const drawerWidth = 0;
const backgroundColor = "#100c08";
const fontColor = "#fff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: backgroundColor,
  },
  appBar: {
    backgroundColor: backgroundColor,
    color: fontColor,
    boxShadow: "0px 0px 0px #36454F",
    height: "10px",
  },
  appBarShift: {
    width: `100%`,
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Rampart One, sans-serif",
    marginBottom: "10px",
    height: "62px",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  //to be moved
  modal: {
    display: "flex",
    justifyContent: "flex-end",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "100vh",
    width: "45vh",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant='h3' noWrap className={classes.title}>
            IsiZulu.js
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuSharp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>
              <WelcomeText />
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <a href='http://localhost:3000/'>
              <Videos />
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href='http://localhost:3000/'>
              <Blog />
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href='http://localhost:3000/'>
              <Podcasts />
            </a>
          </Grid>
        </Grid>
        <div>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
              <div className="modal-exit-icon">
                <FontAwesomeIcon icon={faTimes} size="2x"/>
              </div>
                <h1 id='transition-modal-title'>Transition modal</h1>
                <p id='transition-modal-description'>
                  react-transition-group animates me.
                </p>
              </div>
            </Fade>
          </Modal>
        </div>
      </main>
    </div>
  );
}
