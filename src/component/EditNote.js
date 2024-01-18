// EditNote.js
import React, { useState } from 'react';
import { Dialog, TextField, Button } from '@mui/material';
import { UpdateNote } from '../utils/noteapi';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
});

const EditNote = ({ open, handleClose, noteObj}) => {
    const classes = useStyles();
  const [title, setTitle] = useState(noteObj.title || '');
  const [description, setDescription] = useState(noteObj.description || '');

  const handleSave =async () => {
    noteObj.title=title
    noteObj.description=description
    const res = await UpdateNote(noteObj._id,{title:title,description:description})
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} style={{width:"100%"}}>
      <TextField
      className={classes.root}
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        InputProps={{
            style: {
              height: "40px",
              width:"600px"
            },
          }}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        // InputProps={{
        //     style: {
        //       height: "40px",
        //     },
        //   }}
      />
      <Button variant="contained" color="inherit" onClick={handleSave} style={{color:"black"}}>
        Save
      </Button>
    </Dialog>
  );
};

export default EditNote;
