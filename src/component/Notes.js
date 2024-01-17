import { GetAllNote } from "../utils/noteapi";
import { useState } from "react";
import { useEffect } from "react";
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";

const Notes = ()=>{
    const [noteList,setNoteList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let notesResponse = await GetAllNote();
                // Filter notes based on the conditions
                let filteredNotes = notesResponse.data.filter(note => !note.archived && !note.trashed);
                setNoteList(filteredNotes);
            } catch (error) {
                console.error("Error fetching notes:", error);
                // Handle the error appropriately, e.g., set an error state
            }
        };
    
        fetchData();
    }, []);


    console.log("noteList from DB ",noteList);


    const updateNoteList = (noteObj,action)=>{
        setNoteList([...noteList,noteObj]);
        if(action==='archive'){
            let copy = noteList;
            let updatedCopy = copy.filter((note)=>noteObj!==note._id)
            setNoteList([...updatedCopy]);
        }
        else if(action==='trash'){
            let copy = noteList;
            let updatedCopy = copy.filter((note)=>noteObj!==note._id)
            setNoteList([...updatedCopy]);
        }
        
    }

    return (
        <>       
            <div
                style={{
                marginTop: "20px",
                marginLeft: "30%",
                marginRight:"25%",
                display: "flex",
                flexDirection: "column",
                }}
            >
                <CreateNote updateNoteList={updateNoteList}/>
            </div>
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
                {/* {noteList.map((note, index) => (
                <NoteCard note={note} />
                ))} */}
                {noteList && noteList.map((note) => (
                <NoteCard key={note._id} note={note} updateNoteList={updateNoteList}/>
                ))}
            </div>
        </> 
      )
};

export default Notes;