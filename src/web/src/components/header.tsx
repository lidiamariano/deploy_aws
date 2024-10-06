export function Header() {
  return (
    <header className="bg-pink-500 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center">
        <h1 className="text-5xl font-bold">LIDIA MARIANO</h1>
        <p className="mt-2">
          São Paulo - SP | (85) 98524-0007 |{' '}
          <a href="mailto:lidia.mariano@sou.inteli.edu.br" className="underline">
            lidia.mariano@sou.inteli.edu.br
          </a>
        </p>
        <a
          href="https://linkedin.com/in/lidiamariano"
          className="underline mt-1 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/lidiamariano
        </a>
      </div>
    </header>
  );
}
