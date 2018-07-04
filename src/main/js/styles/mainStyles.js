
const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa'
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 0,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      width: 60,
    },
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerHeader__img: {
    marginLeft: 80
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  menuLink: {
      textDecoration: "none"
  },
  title: {
    margin: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px`,
    color: theme.palette.common.lightBlack
  },
  pos: {
    margin: `0 ${theme.spacing.unit * 1}px 0`,
    color: theme.palette.common.lightBlack
  },
  button: {
      position: "absolute",
      right: "20px",
      marginTop: "20px"
  },
  buttonPagination: {
    height: "30px"
  },
  paginationPage: {
    padding: "9px",
    lineHeight: "1em",
    color: "rgba(0, 0, 0, 0.54)"
  },
  formControl: {
      width: "100%"
  },
  login: {
    padding: "20px",
    position: "relative"
  },
  LoginButton: {
    marginTop: "20px",
    width: "100%"
  },
  loginError: {
    marginTop: "10px",
    color: "red",
    fontSize: "12px",
    textAlign: "center"
  },
  root: {
    flexGrow: 1,
    height: "100%"
  },
  circleAdd: {
    background: "none",
    height: 30,
    minWidth: 45,
    padding: 0
  }
});

export default styles;