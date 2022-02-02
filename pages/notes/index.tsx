/** @jsxImportSource theme-ui */
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SponsoredAd = dynamic(() => import('../../src/components/sponsored-ad'), {
  ssr: false,
});

const Notes = ({ notes }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map((note) => (
          <div key={note.id} sx={{ width: '33%', p: 2 }}>
            <Link key={note.id} href={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* SponsoredAd won't be pre-rendered */}
      <SponsoredAd />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note/`);
  const { data } = await res.json();
  return {
    props: {
      notes: data,
    },
  };
}

export default Notes;
