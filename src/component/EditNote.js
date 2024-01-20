// EditNote.js
import React, { useState } from 'react';
import { Dialog, TextField, Button } from '@mui/material';
import { UpdateNote } from '../utils/noteapi';
import { makeStyles } from '@mui/styles';
import {
  ExpandMore as ExpandMoreIcon,
  ColorLens as ColorIcon,
  Image as ImageIcon,
  Archive as ArchiveIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Grid,
  Menu,
  MenuItem,
} from "@mui/material";

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
  colorGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "8px",
  },
  colorSquare: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    borderRadius: "5px",
  },
});
const basicColors = [
  "#FA1C21",
  "#00FF00",
  "#AC5ADA",
  "#738684",
  "#FFFFFF",
  "#F665FF",
  "#11FFB1",
  "#599AFE",
  "#FFB418",
  "#FFF800",
  "#BFC1C5",
  "#04DBFF",
];

const EditNote = ({ open, handleClose, noteObj}) => {
  const classes = useStyles();
  const [title, setTitle] = useState(noteObj.title || '');
  const [description, setDescription] = useState(noteObj.description || '');
  const [noteColor, setNoteColor] = useState(noteObj.color||'');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isArchived, setIsArchived] = useState(false);

  const handleSave =async () => {
    noteObj.title=title
    noteObj.description=description
    noteObj.color=noteColor
    const res = await UpdateNote(noteObj._id,{title:title,description:description,color:noteColor})
    handleClose();
  };

  const handleColorClick = (color) => {
    setNoteColor(color);
    setAnchorEl(null);
  };

  const renderColorGrid = () => {
    return (
      <div className={classes.colorGrid}>
        {basicColors.map((color, index) => (
          <div
            key={index}
            className={classes.colorSquare}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={{paddingLeft:"10px",paddingRight:"10px"}} >
      <div style={{background:noteColor}}>
      <TextField
        className={classes.root}
        placeholder='Title'
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
        className={classes.root}
        placeholder='Take Note...'
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
      {/* <Button  color="inherit" onClick={handleSave} style={{color:"black"}}>
        Save
      </Button> */}
      <div style={{paddingBottom:"10px",marginLeft:"10px"}}>
      <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            // style={{ marginTop: "1px" }}
          >
            <Grid item>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <ColorIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                style={{ display: "flex" }}
              >
                <MenuItem>{renderColorGrid()}</MenuItem>
              </Menu>
              <IconButton>
                <ImageIcon />
              </IconButton>
              {!isArchived && (
                <IconButton >
                  <ArchiveIcon />
                </IconButton>
              )}
              <IconButton>
                <MoreIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                color="inherit"
                onClick={handleSave}
                style={{ marginTop: "10px",marginRight:"30px" }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
          </div>
        </div>
    </Dialog>
  );
};

export default EditNote;
