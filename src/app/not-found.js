import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='not-found-page'>
        <h1>
          404 - Seite nicht gefunden
        </h1>
        <p>
          Oops! die gesuchte Seite scheint nicht zu existieren.
        </p>
        <Link href="/">Zurück</Link>
    </div>
  );
}
export default NotFound