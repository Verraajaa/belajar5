import { Link, useParams, useNavigate } from "react-router";

function NoteDetail({ notes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find(
    (note) => String(note.id) === id
  );

  if (!note) {
    return (
      <div>
        <h1>Catatan tidak ditemukan</h1>
        <button onClick={() => navigate("/")}>
          Kembali ke My Notes
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Detail Catatan</h1>

      <p>ID Catatan : {id}</p>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Kategori: {note.category}</p>
      <p>Tanggal: {note.date}</p>

      <Link to="/">Kembali ke My Notes</Link>
    </div>
  );
}

export default NoteDetail;