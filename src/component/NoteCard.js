import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const NoteCard = ({ note }) => {
  const { title, description, color } = {
    title: "Hi",
    description: "Hello",
    color: "pink",
  };

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleOpenMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleEditNote = () => {
    setEditDialogOpen(true);
    handleCloseMenu();
  };

  const handleSaveEdit = () => {
    // Add logic to save the edited description
    console.log("Save edited description:", editedDescription);
    setEditDialogOpen(false);
  };

  const handleColorChange = (newColor) => {
    if (onColorChange) {
      onColorChange(note.id, newColor);
      handleCloseMenu();
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        marginBottom: "16px",
        position: "relative",
        backgroundColor: color,
        maxHeight: "fit-content",
        maxWidth: "fit-content",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
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
          <IconButton aria-label="Archive" onClick={() => onArchive(note.id)}>
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
            onClick={() => handleColorChange("#ffcc80")}
          >
            <ColorLensIcon />
          </IconButton>
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
            <MenuItem onClick={handleEditNote}>Edit</MenuItem>
            <MenuItem onClick={() => onDelete(note.id)}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      {/* Edit Description Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <TextField
          label="Edit Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <div style={{ padding: "16px" }}>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      </Dialog>
    </Paper>
  );
};

export default NoteCard;