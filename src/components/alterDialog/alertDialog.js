import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";

import LinkContext from "../../context/addLink";
import { useContext } from "react";

export default function AlertDialog({ id, title }) {
    const mainId = id;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { userLinks, setUserLinks } = useContext(LinkContext);

  function deleteLink() {

    console.log(mainId)

    const links = localStorage.getItem("links");
    const decodeLinks = JSON.parse(links);

    const filteredLink = decodeLinks.filter((e) => {
      return e.id != mainId;
    });
    const encodeLinks = JSON.stringify(filteredLink);
    localStorage.setItem("links", encodeLinks);
    console.log(filteredLink);
    setUserLinks(filteredLink);
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <div onClick={handleClickOpen}>
        <DeleteIcon />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete "{title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            deleteLink();
            handleClose();
          }} autoFocus>
            Agree
          </Button>
          <Button onClick={handleClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
