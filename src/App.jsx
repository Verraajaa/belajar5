import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  const isLoggedIn = true;

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    try {
      const parsedNotes = savedNotes
        ? JSON.parse(savedNotes)
        : [];

      return Array.isArray(parsedNotes) ? parsedNotes : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  return (
    <AppRoutes
      notes={notes}
      setNotes={setNotes}
      isLoggedIn={isLoggedIn}
    />
  );
}

export default App;
