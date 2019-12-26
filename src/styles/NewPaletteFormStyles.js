const drawerWidth = 360;

export default theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  nav: {
    display: 'flex',
  },
  menu: {
    display: "flex",
    alignItems: "center"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  saveButton: {
    marginLeft: theme.spacing(1),
  },
  paletteForm: {
    display: "flex",
    alignItems: "center",
  },
  paletteNameInput: {
    width: "100%"
  },
  savePaletteButton: {
    marginLeft:  theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    height: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  container: {
    display: "flex",
    width: "90%",
    height: "100%",
    margin: "0 auto",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    margin: "1rem 0",
    "& button": {
      margin: " 0 .25rem"
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    marginTop: "64px",
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    width: '100%',
    height: 'calc(100vh - 64px)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  }, 
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
})