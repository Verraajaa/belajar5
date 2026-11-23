import { useState } from "react";
import { Link } from "react-router";

function NoteCard ({note, deleteNote, editNote}) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    function handleEdit(e) {
        e.preventDefault();
        
        editNote(note.id, {
            ...note,
            title: title,
            content: content
        });
        
        setIsEditing(false);
    }
    return (
        <div className="note-card">
            {isEditing ? (
                <form onSubmit={handleEdit}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}/>

                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Cancel
                    </button>
                </form>
            ) : (
                <>
            <div className="note-card-header">
                <span className="note-category">{note.category}</span>
                <button className="favorite-btn">☆</button>
            </div>

            <Link to={`/notes/${note.id}`}>
                <h3>{note.title}</h3>
            </Link>
                <p>{note.content}</p>

                <div className="note-card-footer">
                    <span>{note.date}</span>

                    <div>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>
                </div>
                </>
            )}
        </div>

    );
}

export default NoteCard;