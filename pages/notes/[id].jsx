import * as React from 'react';
import { useRouter } from 'next/router';

const Note = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Note {id}</h1>;
};

export default Note;
