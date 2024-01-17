import { DeleteNote, GetAllNote } from "../utils/noteapi";
import { useState } from "react";
import { useEffect } from "react";
import NoteCard from "./NoteCard";

const TrashContainer = ()=>{
    const [noteList,setNoteList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let notesResponse = await GetAllNote();
                // Filter notes based on the conditions
                let filteredNotes = notesResponse.data.filter(note => !note.archived && note.trashed);
                setNoteList(filteredNotes);
            } catch (error) {
                console.error("Error fetching notes:", error);
                // Handle the error appropriately, e.g., set an error state
            }
        };
    
        fetchData();
    }, []);

    const updateNoteList = async(noteId,action)=>{
        if(action==='trash'){
            let copy = noteList;
            let updatedCopy = copy.filter((note)=>noteId!==note._id)
            setNoteList([...updatedCopy]);
        }
        const res = await DeleteNote(noteId);
        return res;
    }

    return (
        <div
                style={{
                paddingTop: "10px",
                overflow: "auto",
                display: "flex",
                flexWrap: "wrap", // Allow flex items to wrap to the next line
                marginLeft: "30%",
                gap:"10px",
                boxSizing: "border-box",
                }}
            >
                {noteList && noteList.map((note) => (
                <NoteCard key={note._id} note={note} updateNoteList={updateNoteList} />
                ))}
        </div>
    )
};

export default TrashContainer;