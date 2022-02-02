/** @jsxImportSource theme-ui */

const Note = ({ note }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>{note.title} </h1>
    </div>
  );
};

export async function getServerSideProps({ params, _, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}

export default Note;
