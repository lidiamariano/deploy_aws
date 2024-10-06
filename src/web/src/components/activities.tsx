export function Activities() {
  const activities = [
    {
      title: 'Dn’A Women | Membro',
      duration: 'Ago/2024 - Atual',
      description:
        'Programa com bancos internacionais para capacitar mulheres a ingressar no mercado financeiro. Aulas de introdução ao mercado financeiro, workshops em bancos parceiros e mentorias com executivos.',
    },
    {
      title: 'VC Challenge | Semifinalista',
      duration: 'Out/2023',
      description: 'Maior competição de Venture Capital do Brasil.',
    },
    {
      title: 'Central Estudantil - Inteli | Financeiro',
      duration: 'Mar/2023 - Jun/2023',
      description: '',
    },
    {
      title: 'LALA - Latin American Leadership Academy | Alumni',
      duration: 'Jul/2020',
      description: '',
    },
    {
      title: 'Trabalho Voluntário',
      duration: 'Fev/2019 - Jul/2021',
      description:
        'Aulas de Matemática, Física e Química para alunos de escolas públicas.',
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">ATIVIDADES EXTRACURRICULARES</h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index}>
            <h3 className="text-lg font-semibold">
              {activity.title}{' '}
              <span className="text-gray-600">| {activity.duration}</span>
            </h3>
            {activity.description && <p className="mt-1">{activity.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
