import axios from "axios";


export const CreateNoteApi = async (data)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.post("http://localhost:3000/api/v1/note",data,config);
    return res;
}

export const GetAllNote = async ()=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.get("http://localhost:3000/api/v1/note",config);
    return res;
}

export const GetNoteByID = async (noteId)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.get(`http://localhost:3000/api/v1/note/${noteId}`,config);
    return res;
}

export const UpdateNote = async(noteId,data)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.put(`http://localhost:3000/api/v1/note/${noteId}`,data,config);
    return res;
}

export const DeleteNote = async(noteId)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.delete(`http://localhost:3000/api/v1/note/${noteId}`,config);
    return res;
}

export const ArchiveNote = async(noteId)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.put(`http://localhost:3000/api/v1/note/${noteId}/archive`,null,config);
    return res;
}

export const TrashNote = async(noteId)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
        },
    };
    const res = await axios.put(`http://localhost:3000/api/v1/note/${noteId}/trash`,null,config);
    return res;
}