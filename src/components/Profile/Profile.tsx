import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../images/fotka.png";
import Divider from "@material-ui/core/Divider";
import { EditIcon } from "../Icons/Icons";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    bigAvatar: {
      width: 120,
      height: 120,
      margin: "12px",
      boxShadow: "0px 5px 13px 1px #000000"
    },
    mainSection: {
      display: "flex",
      flexDirection: "row",
      margin: "20px",
      height: "100%"
    },
    textContainer: {
      maxWidth: "240px",
      marginBottom: "20px"
    },
    oneRow: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "16px"
    }
  })
);

export function EditWindow() {}

export default function Profile() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentText, setText] = useState("");
  const [currentAddres, setAddres] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const acceptEdit = () => {
    setAddres(currentInput);
    setCurrentInput("");
    handleClose();
  };

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar alt="Wojtaz" src={avatar} className={classes.bigAvatar} />
        <h1>My name is Wojtek</h1>
      </div>
      <Divider style={{ width: "100%" }} />
      <div className={classes.mainSection}>
        <div
          style={{
            flexGrow: 1
          }}
        >
          <div className={classes.textContainer}>
            <h1 style={{ marginBottom: "8px" }}>Rank:</h1>
            <p>Amature</p>
          </div>
          <div className={classes.textContainer}>
            <h1 style={{ marginBottom: "8px" }}>Join:</h1>
            <p>05-10-2019</p>
          </div>
          <div className={classes.textContainer}>
            <h1 style={{ marginBottom: "8px" }}>
              About me:{" "}
              <IconButton onClick={handleClick}>
                <EditIcon />
              </IconButton>
            </h1>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <TextField
                multiline
                style={{ margin: "12px" }}
                onChange={event => setCurrentInput(event.target.value)}
              />
              <Button onClick={() => setText(currentInput)}>Ok</Button>
            </Menu>
            <p>{currentText}</p>
          </div>
          <div className={classes.textContainer}>
            <h1 style={{ marginBottom: "8px" }}>Activity:</h1>
            <ul style={{ textAlign: "left" }}>
              <li>Sport</li>
              <li>E-sport</li>
              <li>Programming</li>
              <li>Football Player</li>
            </ul>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div style={{ minWidth: "200px", margin: "12px" }}>
          <h1 style={{ marginBottom: "16px" }}>Personal:</h1>
          <div className={classes.oneRow}>
            <p>Full name </p>
            <p>Wojtek Lejko</p>
          </div>
          <div className={classes.oneRow}>
            <p>Email</p>
            <p>wojciechs.lejko@gmail.com</p>
          </div>
          <div className={classes.oneRow}>
            <p>Phone</p>
            <p>502846801</p>
          </div>
          <div className={classes.oneRow}>
            <p>Date of birth</p>
            <p>03-12-1996</p>
          </div>
          <div className={classes.oneRow}>
            <p>
              Addres{" "}
              <IconButton onClick={handleClick}>
                <EditIcon />
              </IconButton>
            </p>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <TextField
                multiline
                style={{ margin: "12px" }}
                onChange={event => setCurrentInput(event.target.value)}
              />
              <Button onClick={() => acceptEdit()}>Ok</Button>
            </Menu>
            <p>{currentAddres}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
