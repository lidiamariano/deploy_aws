import { ExperienceItem } from './experienceItem';

export function Experience() {
  const experiences = [
    {
      company: 'Inteli',
      role: 'Estagiária',
      duration: 'Mar/2024 - Atual',
      description:
        'Sou responsável por analisar todos os projetos desenvolvidos pelas turmas da faculdade, assegurando a qualidade das entregas para as empresas parceiras. Além disso, desenvolvo dashboards para o monitoramento e controle das entregas.',
    },
    {
      company: 'BTG Pactual',
      role: 'Estagiária de Férias',
      duration: 'Jul/2024',
      description:
        'Trabalhei na área de IT Legal, realizando testes de integração com Python e implementando melhorias na plataforma que conecta a API do GPT ao ecossistema da empresa. Também analisei a lógica de negócios e preparei um pitch sobre o projeto.',
    },
    {
      company: 'Naquele Pick - Startup De Fantasy Game',
      role: 'Desenvolvedora Backend',
      duration: 'Dez/2023 - Mar/2024',
      description:
        'Atuei no desenvolvimento do backend da aplicação, além de realizar ajustes no frontend e criar uma API de pagamento.',
    },
    {
      company: 'Cia De Talentos',
      role: 'Estagiária de Férias',
      duration: 'Jul/2023',
      description:
        'Na área de PMO & Escritório de Projetos, analisei treinamentos gamificados da empresa utilizando Matrizes de Risco e compreendendo o modelo de negócios. Conectei as aplicações a um banco de dados, implementei a autenticação de usuários e criei pitches para a apresentação final do projeto.',
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-pink-500 mb-4">EXPERIÊNCIAS</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          company={exp.company}
          role={exp.role}
          duration={exp.duration}
          description={exp.description}
        />
      ))}
    </section>
  );
}
