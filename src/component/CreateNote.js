import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ColorLens as ColorIcon,
  Image as ImageIcon,
  Archive as ArchiveIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { SketchPicker } from "react-color";
import { CreateNoteApi } from "../utils/noteapi";

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
  "#2FE9D2",
  "#F665FF",
  "#11FFB1",
  "#599AFE",
  "#FFB418",
  "#FFF800",
  "#BFC1C5",
  "#04DBFF",
];

const CreateNote = ({ updateNoteList }) => {
  const classes = useStyles();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [isArchived, setIsArchived] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [noteColor, setNoteColor] = useState("#ffffff"); // Default color

  const handleSave = async() => {
    if (noteTitle.trim() || noteDescription.trim()) {
      const res =await CreateNoteApi({
        title: noteTitle,
        description: noteDescription,
        isArchived,
        color: noteColor, // Pass the selected color
      });
      updateNoteList(res.data);
      // Clear the input fields after saving
      setNoteTitle("");
      setNoteDescription("");
      setIsArchived(false);
      setNoteColor("#ffffff"); // Reset color to default
    }
  };

  const handleArchive = () => {
    setIsArchived(true);
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
    <Accordion >
      <AccordionSummary>
        <TextField
          className={classes.root}
          label="Title"
          fullWidth
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          margin="none"
          InputProps={{
            style: {
              height: "40px",
            },
          }}
        />
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ width: "100%" }}>
          <TextField
            className={classes.root}
            label="Description"
            multiline
            fullWidth
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            margin="none"
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          />
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: "10px" }}
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
                <IconButton onClick={handleArchive}>
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
                style={{ marginTop: "10px" }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreateNote;