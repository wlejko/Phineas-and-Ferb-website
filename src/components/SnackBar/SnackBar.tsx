import React, { useState, SyntheticEvent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { green } from "@material-ui/core/colors";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CloseIcon } from "../Icons/Icons";

const useStyles1 = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

export interface Props {
  className?: string;
  message?: string;
  variant: string;
  onClose?: () => void;
}

export interface SnackBarProps {
  isOpen: boolean;
  variant: string;
  message: string;
}

function MySnackbarContentWrapper(props: Props) {
  const classes = useStyles1();
  const { className, message, variant, onClose, ...other } = props;
  let snackStyle = classes.success;

  if (variant === "success") {
    snackStyle = classes.success;
  }
  if (variant === "error") {
    snackStyle = classes.error;
  }
  if (variant === "info") {
    snackStyle = classes.info;
  }

  return (
    <SnackbarContent
      key={message}
      className={snackStyle}
      aria-describedby="client-snackbar"
      message={
        <span
          id="client-snackbar"
          className={classes.message}
          style={{ textAlign: "center" }}
        >
          {message}
        </span>
      }
      {...other}
    />
  );
}

export default function SnackBar(props: SnackBarProps) {
  const { isOpen, variant, message } = props;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={isOpen}
      >
        <MySnackbarContentWrapper variant={variant} message={message} />
      </Snackbar>
    </div>
  );
}
