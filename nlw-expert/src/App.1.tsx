import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { useState } from 'react';



export function App() {
  const [notes, setNotes] = useState([
    { id: 1, date: new Date(), content: 'hellow' },
    { id: 2, date: new Date(), content: 'Nova nota' }, ,
  ]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
    };
    setNotes([newNote, ...notes]);


  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Buscar em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500" />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />


        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />;
        })}



      </div>
    </div>
  );
}
