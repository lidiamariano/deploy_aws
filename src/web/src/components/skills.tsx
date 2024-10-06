export function Skills() {
  const skills = [
    'Python',
    'Pandas & Numpy',
    'Canvas de Proposta de Valor',
    'Forças de Porter',
    'Equity Research Case Report',
    'GitHub',
    'Typescript',
    'React',
    'API de Pagamento',
    'Firebase',
    'Excel Intermediário',
    'Power BI',
    'Postgres',
    'GDScript',
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">CONHECIMENTOS</h2>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-pink-200 text-pink-800 px-3 py-1 m-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

