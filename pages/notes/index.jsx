import * as React from 'react';
import Link from 'next/link';

const notesResult = new Array(15)
  .fill(1)
  .map((element, index) => ({ id: index, title: `Note: ${index}` }));

const Notes = () => (
  <div>
    <h1>Notes page path</h1>
    <ul>
      {notesResult.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>
            <a>{note.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Notes;
