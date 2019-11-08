import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { DoneIcon } from "../Icons/Icons";
import ModalWindown from "../Modal/ModalWindow";
import Profile from "../Profile/Profile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallColumn: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexBasis: "5%",
      padding: theme.spacing(1, 2)
    },
    column: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexBasis: "40%",
      padding: theme.spacing(1, 2)
    },
    butttonColumn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexBasis: "15%",
      padding: theme.spacing(1, 2)
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`
    }
  })
);

export interface OneRowProps {
  episode: string;
  name: string;
  date: string;
  content: string;
  image?: string;
}

export default function OneRow(props: OneRowProps) {
  const classes = useStyles();
  const { episode, name, date, content, image } = props;
  const [isComplete, setIsComplete] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.smallColumn}>
        {isComplete && <DoneIcon />}
        <Typography style={{ alignItems: "center", marginLeft: "8px" }}>
          {episode}
        </Typography>
      </div>
      <br />
      <div className={clsx(classes.column, classes.helper)}>
        <Typography
          style={{
            textAlign: "center",
            fontSize: "14px",
            textDecoration: isComplete ? "line-through" : ""
          }}
        >
          {name}
        </Typography>
      </div>
      <br />
      <div className={clsx(classes.column, classes.helper)}>
        <Typography
          style={{
            textAlign: "center",
            textDecoration: isComplete ? "line-through" : ""
          }}
        >
          {date}
        </Typography>
      </div>
      <br />
      <div className={clsx(classes.butttonColumn, classes.helper)}>
        <Button
          variant="outlined"
          style={{
            marginRight: "4px",
            backgroundColor: "#248ea9",
            color: "#fafdcb"
          }}
          onClick={() => setOpen(true)}
        >
          View
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "#248ea9",
            color: "#fafdcb",
            width: "112px"
          }}
          onClick={() => setIsComplete(!isComplete)}
        >
          {isComplete ? "not done" : "Done"}
        </Button>
        <ModalWindown
          title={name}
          content={content}
          open={open}
          onClose={handleClose}
          image={image}
        />
      </div>
    </>
  );
}
