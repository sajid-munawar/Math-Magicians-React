import Navbar from './Navbar';

function Qoute() {
  return (
    <div>
      <Navbar />
      <div style={{
        maxWidth: '600px',
        borderRadius: '10%',
        boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
        padding: '2%',
        margin: '0 auto',
        fontSize: '2rem',
        boxSizing: 'border-box',
        background: '#fff',
      }}
      >
        <blockquote>
          <q>
            If people do not believe that mathematics is simple, it is only because
            they do not realize how complicated life is.
          </q>
          <br />
          <br />
          <cite style={{ float: 'right' }}>John von Neumann</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default Qoute;
