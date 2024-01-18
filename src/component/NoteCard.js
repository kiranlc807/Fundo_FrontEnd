import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import ColorIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import {TrashNote} from "../utils/noteapi"
import { ArchiveNote } from "../utils/noteapi";
import { makeStyles } from "@mui/styles";
import { UpdateNote } from "../utils/noteapi";
import EditNote from "./EditNote";


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

const NoteCard = ({ note,updateNoteList }) => {
  const classes = useStyles();
  const { title, description, color } = note;
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [noteColor, setNoteColor] = useState(note.color); // Default color
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleNoteClick = () => {
    // Open the EditNote modal when the note is clicked
    handleSaveEdit();
  };

  const handleSaveEdit = () => {
    // Add logic to save the edited note
    setEditDialogOpen(true);
  };

  const handleClose = ()=>{
    console.log(note);
    console.log(editedTitle,editedDescription);
    setEditDialogOpen(false);
  }

  const onArchive = async(noteID)=>{
      const res = await ArchiveNote(noteID);
      
      if(!res.data.archived){
        updateNoteList(noteID,"unarchive");
      }
      else{
        updateNoteList(noteID,"archive");
      }
      
  };

  const onAddImage = () =>{

  } 

  const onDelete =async (noteId)=>{
    const del=updateNoteList(noteId,"trash");
    if(del===null){
      return;
    }
    const res = await TrashNote(noteId);
  }

  const handleColorClick = (color,noteId) => {
    setNoteColor(color);
    setAnchorEl(null);
    UpdateNote(noteId,{color:color});
  };

  const renderColorGrid = (noteId) => {
    return (
      <div className={classes.colorGrid}>
        {basicColors.map((color, index) => (
          <div
            key={index}
            className={classes.colorSquare}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color,noteId)}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        marginBottom: "16px",
        position: "relative",
        backgroundColor: noteColor,
        maxHeight: "fit-content",
        maxWidth: "fit-content",
      }}
    >
      <Typography variant="h6" gutterBottom onClick={handleNoteClick}>
        {title}
      </Typography>
      <Typography variant="body1" paragraph onClick={handleNoteClick}>
        {description}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "fit-content",
        }}
      >
        <div>
          <IconButton aria-label="Archive" onClick={() => onArchive(note._id)}>
            <ArchiveIcon />
          </IconButton>
          <IconButton aria-label="remind me">
            <NotificationsIcon />
          </IconButton>
          <IconButton aria-label="collaborate">
            <GroupIcon />
          </IconButton>
          <IconButton
            aria-label="change color"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <ColorIcon />
          </IconButton>
          <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                style={{ display: "flex" }}
              >
            <MenuItem>{renderColorGrid(note._id)}</MenuItem>
            </Menu>
          <IconButton
            aria-label="add image"
            onClick={() => onAddImage(note.id)}
          >
            <InsertPhotoIcon />
          </IconButton>
          <IconButton aria-label="more options" onClick={handleOpenMenu}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleCloseMenu}
          >
            {/* <MenuItem onClick={handleEditNote}>Edit</MenuItem> */}
            <MenuItem onClick={() => onDelete(note._id)}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
    </Paper>
    {/* Edit Description Dialog*/}
    <EditNote
        open={editDialogOpen}
        handleClose={handleClose}
        noteObj={note}
      />
    </div>
  );
};

export default NoteCard;