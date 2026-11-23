import { useState } from "react";

function NoteForm({addNote}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if (!title.trim() || !content.trim()) {
            return;
        }
        const newNote = {
            id: Date.now(),
            title: title,
            content: content,
            category: "Personal",
            favorite: false,
            archived: false,
            date: new Date().toLocaleDateString()
        };
        
        addNote(newNote);
        
        setTitle("");
        setContent("");
    }
    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <h2>Add New Note</h2>
            <input type="text" placeholder="Note title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <textarea placeholder="Write your note..." value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type="submit">Add Note</button>
        </form>
    );
}
export default NoteForm;