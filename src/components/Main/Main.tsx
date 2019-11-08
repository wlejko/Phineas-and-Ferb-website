import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "../../images/phineas-ferb.png";
import Cards from "../Cards/Cards";
import Episodes from "../Episodes/Episodes";
import Tags from "../Tags/Tags";
import IconButton from "@material-ui/core/IconButton";
import { AcountIcon } from "../Icons/Icons";
import Profile from "../Profile/Profile";

const drawerWidth = 140;
const marginDrawer = drawerWidth + 5;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      height: "100%"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#248ea9",
      alignItems: "center",
      color: "#fafdcb"
    },
    content: {
      display: "flex",
      marginLeft: marginDrawer,
      marginTop: "4px",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: "100%"
    },
    profileIcon: {
      position: "absolute",
      bottom: "4px",
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    smallDivider: {
      width: "80%"
    },
    bigDivider: {
      width: "100%"
    },
    logo: {
      width: "100px",
      height: "100px",
      marginTop: "12px"
    }
  })
);

function changeView(view: string) {
  if (view === "characters") {
    return <Cards />;
  } else if (view === "episodes") {
    return <Episodes />;
  } else if (view === "tags") {
    return <Tags />;
  } else if (view === "profile") {
    return <Profile />;
  }
}

export default function Main() {
  const classes = useStyles();
  const [currentView, setCurrentView] = useState("profile");

  return (
    <div className={classes.root}>
      <main className={classes.content}>{changeView(currentView)}</main>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div>
          <img className={classes.logo} src={logo} alt={logo} />
        </div>
        <Divider orientation="horizontal" className={classes.smallDivider} />
        <List style={{ height: "100%" }}>
          <ListItem button onClick={() => setCurrentView("characters")}>
            <ListItemText primary="characters" />
          </ListItem>
          <Divider orientation="horizontal" className={classes.bigDivider} />
          <ListItem button onClick={() => setCurrentView("episodes")}>
            <ListItemText primary="episodes" />
          </ListItem>
          <Divider orientation="horizontal" className={classes.bigDivider} />
          <ListItem button onClick={() => setCurrentView("tags")}>
            <ListItemText primary="favourite" />
          </ListItem>
          <div className={classes.profileIcon}>
            <IconButton onClick={() => setCurrentView("profile")}>
              <AcountIcon />
            </IconButton>
          </div>
        </List>
      </Drawer>
    </div>
  );
}
