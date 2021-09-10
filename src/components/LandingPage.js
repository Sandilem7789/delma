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
import { Button } from "@material-ui/core";

/*Icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

/* CUSTOM COMPONENTS */
import Videos from "./Categories/Videos";
import Blog from "./Categories/Blog";
import Podcasts from "./Categories/Podcasts";
import WelcomeText from "./WelcomeText";

/* Navigation */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const drawerWidth = 0;

/*Colors*/
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
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    height: "100vh",
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
    background: "rgba(20, 20, 20, 0.9)",
    border: "1px solid #302",
    borderRadius: "20px 0px 0px 20px",
    outline: "none",
    boxShadow: theme.shadows[6],
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
        <Router className={classes.drawerHeader}>
          <div  />
          <Grid container spacing={3} className='landing-badges'>
            <Grid item xs={12}>
              <div>
                <WelcomeText />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <Link to="/videos" exact>
                  <div className='video-paper'>
                    <FontAwesomeIcon
                      icon={faVideo}
                      className='icon'
                      size='3x'
                    />
                    <h4>Videos</h4>
                  </div>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link>
                <div className='blog-paper'>
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    className='icon'
                    size='3x'
                  />
                  <h4>Blog</h4>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link>
                <div className='podcast-paper'>
                  <FontAwesomeIcon icon={faMusic} className='icon' size='3x' />
                  <h4>Podcasts</h4>
                </div>
              </Link>
            </Grid>
          </Grid>
          <Switch>
            <Route>
              <Route path="/videos">
                <Videos/>
              </Route>
              <Route path="/blog">
                <Blog/>
              </Route>
              <Route path="/podcasts">
                <Podcasts/>
              </Route>
            </Route>
          </Switch>
        </Router>
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
                <Grid container>
                  <Grid item xs={11}>
                    <h1 style={{ color: "white" }}></h1>
                  </Grid>
                  <Grid item xs={1}>
                    <div className='modal-exit-icon'>
                      <FontAwesomeIcon
                        icon={faTimes}
                        size='2x'
                        className='fa-times-icon'
                        onClick={handleClose}
                      />
                    </div>
                  </Grid>
                </Grid>
                <br />
                <div className='modal-links'>
                  <h1 style={{ color: "white" }}>Home</h1>
                  <h1 style={{ color: "white" }}>About</h1>
                  <h1 style={{ color: "white" }}>Contact Us</h1>
                </div>
                <Divider
                  style={{
                    color: "white",
                    marginBottom: "20px",
                  }}
                />
                <Grid
                  container
                  align='center'
                  spacing={2}
                  className='modal-buttons'
                >
                  <Grid item xs={12}>
                    <Button variant='outlined' color='primary'>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='contained' color='primary'>
                      Hire a Tutor
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Fade>
          </Modal>
        </div>
      </main>
    </div>
  );
}
