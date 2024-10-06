interface ProjectItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export function ProjectItem({ title, company, duration, description }: ProjectItemProps) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">
        {title} | {company}
      </h3>
      <p className="text-gray-600">{duration}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
