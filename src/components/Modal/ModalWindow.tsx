import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

const useStyles = makeStyles({
  modal: {
    textAlign: "center"
  },
  imageContainer: {
    maxWidth: "300px",
    maxHeight: "400px"
  }
});

export interface ModalProps {
  title: string;
  content: string;
  open: boolean;
  onClose: () => void;
  image?: string;
}

export default function ModalWindow(props: ModalProps) {
  const classes = useStyles();
  const { title, content, open, onClose, image } = props;

  return (
    <Dialog
      onClose={onClose}
      open={open}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.modal}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <img className={classes.imageContainer} src={image} alt={title} />
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
