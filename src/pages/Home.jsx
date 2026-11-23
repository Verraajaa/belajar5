import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

function Home({ notes, setNotes }) {
  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  }

  function editNote(id, updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? updatedNote : note
      )
    );
  }

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="main-judul">
          <h1>Welcome to My Notes!</h1>
          <p>Organize your thoughts and ideas</p>

          <NoteForm addNote={addNote} />

          <div className="notes-container">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                editNote={editNote}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;