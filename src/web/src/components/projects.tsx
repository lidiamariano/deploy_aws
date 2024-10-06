import { ProjectItem } from './projectItem';

export function Projects() {
  const projects = [
    {
      title: 'Sistema de Manutenção Preventiva com IA e Arquitetura em Nuvem',
      company: 'Volkswagen',
      duration: 'Ago/2024 - Atual',
      description:
        'Desenvolvi uma rede neural para prever a probabilidade de falhas em veículos, visando reduzir a necessidade de testes de rodagem e, consequentemente, diminuir os custos para a empresa.',
    },
    {
      title: 'Lógica para Predição com IA',
      company: 'Mobly',
      duration: 'Ago - Out/2023',
      description:
        'Desenvolvi um modelo preditivo para a área de Supply Chain, otimizando o reabastecimento de estoques e reduzindo custos associados a produtos que não seriam vendidos.',
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-pink-500 mb-4">PROJETOS ACADÊMICOS</h2>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          company={project.company}
          duration={project.duration}
          description={project.description}
        />
      ))}
    </section>
  );
}